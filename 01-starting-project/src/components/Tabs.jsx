export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // const ButtonsContainer = buttonsContainer; // Dynamically use the specified container element

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}

        </>
    );
}