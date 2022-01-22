import { useEffect, useState } from 'react';
import { handleInputChange, numOr0 } from '../../helpers/helpers';
import { mortgageCalc } from '../../helpers/formulaHousing';

const HousingLogic = () => {
  const [inputs, setInputs] = useState(() => {
    if (!localStorage.getItem('housingInputs')) {
      return {
        cost: '',
        down: '',
        interest: '',
        years: '',
        propertyTax: '',
        propertyInsurance: '',
        hoa: '',
        electric: '',
        water: '',
        gas: '',
        internet: '',
        misc: '',
        maintRateLow: '',
        maintRateHigh: '',
      };
    } else {
      return JSON.parse(localStorage.getItem('housingInputs'));
    }
  });

  const [outputs, setOutputs] = useState({
    calcDown: '',
    calcTax: '',
    calcIns: '',
    calcMortgage: '',
    calcUtils: '',
    calcMaintLow: '',
    calcMaintHigh: '',
  });

  const [total, setTotal] = useState({
    piti: '',
    pitiMaint: '',
  });

  useEffect(() => {
    localStorage.setItem('housingInputs', JSON.stringify(inputs));
    calcOutputs();
    // eslint-disable-next-line
  }, [inputs]);

  const calcOutputs = () => {
    const {
      cost,
      down,
      propertyTax,
      propertyInsurance,
      electric,
      water,
      gas,
      internet,
      misc,
      maintRateLow,
      maintRateHigh,
      interest,
      years,
    } = inputs;
    setOutputs({
      calcDown: Math.round(cost * down),
      calcTax: Math.round((cost * propertyTax) / 12),
      calcIns: Math.round((cost * propertyInsurance) / 12),
      calcUtils: [electric, water, gas, internet, misc].reduce(
        (pv, cv) => numOr0(pv) + numOr0(cv)
      ),
      calcMaintLow: Math.round((cost * maintRateLow) / 12),
      calcMaintHigh: Math.round((cost * maintRateHigh) / 12),
      calcMortgage: Math.round(
        numOr0(mortgageCalc(cost - cost * down, interest, years))
      ),
    });
  };

  useEffect(() => {
    const { calcMortgage, calcTax, calcIns, calcUtils, calcMaintLow } = outputs;
    setTotal({
      piti: Math.round(calcMortgage + calcTax + calcIns + calcUtils),
      pitiMaint: Math.round(
        calcMortgage + calcTax + calcIns + calcUtils + calcMaintLow
      ),
    });
  }, [inputs, outputs]);

  const handleInputs = (e) => {
    handleInputChange(e, inputs, setInputs);
  };

  return { inputs, outputs, handleInputs, total };
};

export default HousingLogic;
