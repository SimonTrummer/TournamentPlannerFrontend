import './btMediumGlass.css'

interface Props {
    text:string;
}

const MediumButton = (props:Props):JSX.Element => {

    return (
        <button className={"glass-button"}>
            {props.text}
        </button>
    );
};

export default MediumButton
