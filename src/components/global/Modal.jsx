import React from 'react'
import { CgClose } from "react-icons/cg";
import { ModalBody, ModalContainer, ModalContent, ModalHeader, ModalOverlay } from 'style/ModalStyles'

export default function Modal({isOpen, closeModal, children}) {

    return isOpen ? (
        <ModalContainer>
            <ModalOverlay onClick={closeModal}></ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <CgClose onClick={closeModal}/>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </ModalContainer>
    ) : (
        <></>
    )
}
