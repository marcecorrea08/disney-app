import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import
{
	selectUserName,
	selectUserPhoto,
	setSignOutState,
	setUserLoginDetails,
} from '../features/user/userSlice';

export default function Header(props)
{
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() =>
	{
		auth.onAuthStateChanged(async (user) =>
		{
			if (user)
			{
				setUser(user);
				history.push('/home');
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userName]);

	const handleAuth = () =>
	{
		if (!userName)
		{
			auth
				.signInWithPopup(provider)
				.then((result) =>
				{
					setUser(result.user);
				})
				.catch((error) =>
				{
					alert(error.message);
				});
		}
		else if (userName)
		{
			auth.signOut()
				.then(() =>
				{
					dispatch(setSignOutState())
					history.push('/')
				})
				.catch((error) => alert(error.message))
		}
	};

	const setUser = (user) =>
	{
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	return (
		<Nav>
			<Logo>
				<img src='/img/logos/logo.svg' alt='Disney+' />
			</Logo>
			{
				!userName
					? <Login onClick={handleAuth}>Login</Login>
					: <>
						<NavMenu>
							<a href='/home'>
								<img src='/img/icons/home-icon.svg' alt='home' />
								<span>INICIO</span>
							</a>
							<a href='/search'>
								<img src='/img/icons/search-icon.svg' alt='home' />
								<span>BUSCAR</span>
							</a>
							<a href='/watchlist'>
								<img src='/img/icons/watchlist-icon.svg' alt='home' />
								<span>WATCHLIST</span>
							</a>
							<a href='/originals'>
								<img src='/img/icons/original-icon.svg' alt='home' />
								<span>ORIGINALES</span>
							</a>
							<a href='/movies'>
								<img src='/img/icons/movie-icon.svg' alt='home' />
								<span>PELÍCULAS</span>
							</a>
						</NavMenu>
						<SignOut>
							<UserImage src={userPhoto} alt={userName} />
							<DropDown>
								<span onClick={handleAuth}>Cerrar Sesión</span>
							</DropDown>
						</SignOut>
					</>
			}
		</Nav>
	);
}

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`;

const Logo = styled.a`
	padding: 0;
	width: 80px;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;
	img {
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-flow: row nowrap;
	margin: 0px;
	margin-right: auto;
	margin-left: 25px;
	padding: 0px;
	position: relative;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
			min-width: 20px;
			width: 20px;
			margin-top: -5px;
			z-index: auto;
		}

		span {
			color: rgb(249, 249, 249);
			font-size: 13px;
			letter-spacing: 1.42px;
			line-height: 1.08;
			padding: 2px 0px;
			white-space: nowrap;
			position: relative;

			&:before {
				height: 2px;
				width: auto;
				bottom: -6px;
				right: 0px;
				left: 0px;
				display: block;
				position: absolute;
				background-color: rgb(249, 249, 249);
				border-radius: 0px 0px 4px 4px;
				content: '';
				opacity: 0;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const Login = styled.a`
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transition: all 0.2s ease 0s;
	cursor: pointer;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

const UserImage = styled.img`
	height: 100%;
`;

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0px;
background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 150px;
opacity: 0;
`;

const SignOut = styled.div`
width: 48px;
height: 48px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

${UserImage} {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}

&:hover {
	${DropDown} {
		opacity: 1;
		transition-duration: 1s;
	}
}
`;