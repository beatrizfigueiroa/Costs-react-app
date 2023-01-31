
import styles from './Select.module.css'

type selectAttributes = {
    text: string,
    name: string,
    options: any,
    handleOnChange: any,
    value: any
}

export function Select({ text, name, options, handleOnChange, value }: selectAttributes) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>Select a option</option>
        {options.map((options: any) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>
    </div>
  )
}
