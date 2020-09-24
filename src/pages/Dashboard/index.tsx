import React from 'react';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiPower, FiClock } from 'react-icons/fi';
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
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento à seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/23298873?s=460&u=490eb1c5dac14416a5ca23fd957f67a793486608&v=4"
                alt="Jean Lobo"
              />
              <strong>Jean Lobo</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
