import React from 'react';

import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img
              src="https://avatars0.githubusercontent.com/u/25158632?s=460&u=5a5c800c99bc7121d6abc52ce3c04ee71061ecfe&v=4"
              alt="John Oliver"
            />
            <div>
              <span>Bem-vindo</span>
              <strong> {user.name}</strong>
            </div>
          </Profile>
          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
