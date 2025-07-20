import '../styles/ResultInput.css';

function ResultInput({ value, onChange, onBlur, min, max, className }) {
    return (
        <input
            type="number"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onBlur();
                e.target.blur();
              }
            }}
            className={className}
            min={min}
            max={max}
          />
    );
}

export default ResultInput;