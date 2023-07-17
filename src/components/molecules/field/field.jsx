import './field.css';

function Field({ text, input, fieldError, }) {
    const error = 'Error: incorrect format!';

    return (
        <div className="field">
            <input 
                { ...input }
                placeholder={ text }
                required
                autoCorrect="off"
                autoComplete='off'
                spellCheck='false'
            />
            {
                fieldError && <span>{ error }</span>
            }
        </div> 
    );
}

export default Field;