import { useState } from "react"
import Modal from 'react-modal'

interface iModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal(props: iModalProps) {

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
        >
            <p>Modal</p>
        </Modal>
    )
}