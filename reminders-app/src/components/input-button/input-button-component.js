import './input-button-component.css';

function InputButton({buttonDisplayName, callbackFunction}) {
    return (
        <input type="button" value={buttonDisplayName} onClick={() => callbackFunction()}></input>
    )
}

export default InputButton;