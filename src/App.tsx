import { useState } from 'react';
import { DashBoard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
      setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
      setIsNewTransactionModalOpen(false)
  }


  return (
    <>
      <Header
      onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <DashBoard />
      <GlobalStyle />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
