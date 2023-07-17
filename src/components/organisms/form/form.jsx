import Field from '../../molecules/field/field';

import './form.css';

function Form({ fields, callback, }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const response = callback(data);
        if (!response) return;
    }
    const elements = fields.map(field => (
        <Field key={ field.input.id } { ...field } />
    ));

    return (
        <div className="form">
            <form onSubmit={ handleSubmit }>
                <div className="form__div--fields">
                    { elements }
                </div>        
                <div className="form__div--submit">
                    <input className="color--f0f0f0 font--bold" type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
}

export default Form;