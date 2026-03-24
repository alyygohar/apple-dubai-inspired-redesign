import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import { useConsultation } from "@/components/ConsultationProvider";

interface PaymentCalculatorProps {
  defaultPrice?: number;
}

const PaymentCalculator = ({ defaultPrice = 1000000 }: PaymentCalculatorProps) => {
  const { open: openConsultation } = useConsultation();
  const [propertyPrice, setPropertyPrice] = useState(defaultPrice.toString());
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [loanDuration, setLoanDuration] = useState(10);
  const [interestRate, setInterestRate] = useState("4.8");

  const { monthlyPayment, downPaymentAmount, loanAmount } = useMemo(() => {
    const price = parseFloat(propertyPrice.replace(/,/g, "")) || 0;
    const down = price * (downPaymentPercent / 100);
    const loan = price - down;
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = loanDuration * 12;

    if (rate === 0 || months === 0 || loan <= 0) {
      return { monthlyPayment: 0, downPaymentAmount: down, loanAmount: loan };
    }

    const monthly = loan * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return { monthlyPayment: monthly, downPaymentAmount: down, loanAmount: loan };
  }, [propertyPrice, downPaymentPercent, loanDuration, interestRate]);

  const formatAED = (num: number) =>
    `AED ${num.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="p-6 md:p-8 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-accent" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">Payment Calculator</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Estimate your monthly payments effortlessly with our mortgage calculator.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-0 md:gap-0">
        {/* Left - Description */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you're buying a new home or refinancing your mortgage, get quick and accurate results by inputting the necessary details.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plan your finances confidently, gain insights into mortgage options, and determine affordability with different loan amounts, interest rates, and repayment terms.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our user-friendly interface and reliable calculations make informed decision-making hassle-free. Empower yourself with knowledge to achieve your homeownership goals.
            </p>
          </div>
        </div>

        {/* Right - Calculator */}
        <div className="p-6 md:p-8 bg-muted/30">
          <div className="space-y-5">
            {/* Property Price */}
            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">
                Property Price (AED)
              </label>
              <input
                type="text"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full bg-background border border-border rounded-xl py-3 px-4 text-sm font-medium text-foreground focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                  Down Payment
                </label>
                <span className="text-sm font-semibold text-accent">
                  {formatAED(downPaymentAmount)} ({downPaymentPercent}%)
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={80}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-accent [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-md"
              />
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-muted-foreground">5%</span>
                <span className="text-[10px] text-muted-foreground">80%</span>
              </div>
            </div>

            {/* Loan Duration */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                  Loan Duration
                </label>
                <span className="text-sm font-semibold text-foreground">{loanDuration} Years</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={loanDuration}
                onChange={(e) => setLoanDuration(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-accent [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-md"
              />
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-muted-foreground">1 Year</span>
                <span className="text-[10px] text-muted-foreground">25 Years</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">
                Interest Rate (%)
              </label>
              <input
                type="text"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ""))}
                className="w-full bg-background border border-border rounded-xl py-3 px-4 text-sm font-medium text-foreground focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            {/* Result */}
            <div className="bg-background rounded-xl p-5 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Monthly Repayment</p>
              <p className="text-2xl md:text-3xl font-bold text-accent">
                {formatAED(monthlyPayment)}
              </p>
              <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
                * Estimated initial monthly payments based on a {formatAED(parseFloat(propertyPrice.replace(/,/g, "")) || 0)} purchase price with a {interestRate}% fixed interest rate.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={openConsultation}
              className="w-full border border-accent text-accent py-3 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculator;
