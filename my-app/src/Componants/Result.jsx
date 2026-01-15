import "../CSS/App.css";
import illustration from "/illustration-empty.svg";

function Result({ mortgageInfo, classname }) {
  const { rate, type, term, amount } = mortgageInfo;
  const r = rate / 100 / 12;
  const n = term * 12;
  const monthlyPayment =
    type === "interest"
      ? +amount * r
      : r === 0
      ? +amount / n
      : (+amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const formattedMonthly = Number(monthlyPayment).toLocaleString("en-IE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const totalRepayment =
    type === "interest" ? +amount + monthlyPayment * n : monthlyPayment * n;

  const formatedTotal = Number(totalRepayment).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={`result ${classname}`}>
      <div className="result__info">
        <img src={illustration} alt="calcualtor image" />
        <h2 className="result__title">Results shown here</h2>
        <p className="result__description">
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
      <div className="result__result-content">
        <h2 className="result__title">Your results</h2>
        <p className="result__description">
          Your results are shown below based on the inforamtion you provided. To
          adjust the result, edit the form and click "calculate repayment"
          again.
        </p>

        <div className="result__result-container">
          <div className="result__monthly-repayments-group">
            <span className="result__description">Your monthly repayments</span>
            <h2 className="result__monthly-repayments">
              &#8364;{formattedMonthly}
            </h2>
          </div>

          <div className="result__term-group">
            <span className="result__description">
              Total you 'll repay over the term
            </span>
            <h2 className="result__term-repayments">&#8364;{formatedTotal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
