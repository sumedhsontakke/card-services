
import Container from '../../components/Container';
import CustomStatusBar from '../../components/CustomStatusBar';
import { useAccountDetails } from '../../hooks/api/accounts';
import { useCardsList } from '../../hooks/api/cards';
import Accounts from './components/Accounts';
import Cards from './components/Cards';
import styles from './styles';

const Home = () => {
  const {data: accountDetails, isLoading: isAccountDetailsLoading, error} = useAccountDetails();
  const {data: cardDetailsList, isLoading: isCardDetailsLoading} = useCardsList();
  
  return (
    <Container customStyles={styles.container}>
      <CustomStatusBar />
      <Accounts 
        accountDetails={accountDetails}
        isAccountDetailsLoading={isAccountDetailsLoading}
        error={error}
      />
      <Cards
        cardDetailsList={cardDetailsList}
        isCardDetailsLoading={isCardDetailsLoading}
      />
    </Container>
  );
}

export default Home;

