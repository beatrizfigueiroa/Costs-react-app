import styles from './Input.module.css'

type inputAttributes = {
    type: string,
    text: string,
    name: string,
    placeholder: string,
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: any
}

export function Input({ type, text, name, placeholder, handleOnChange, value }: inputAttributes) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )
}
