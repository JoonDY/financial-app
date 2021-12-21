import { useEffect, useState } from 'react';
import Form from '../components/Form';
import Input from '../components/Input';
import { handleInputChange } from '../util/helpers';

const Housing = () => {
  const [inputs, setInputs] = useState(() => {
    if (!localStorage.getItem('housingInputs')) {
      return {
        cost: null,
        down: null,
        interest: null,
        years: null,
        propertyTax: null,
        propertyInsurance: null,
        hoa: null,
        electric: null,
        water: null,
        gas: null,
        internet: null,
        misc: null,
        maintRateLow: null,
        maintRateHigh: null,
      };
    } else {
      return JSON.parse(localStorage.getItem('housingInputs'));
    }
  });

  useEffect(() => {
    localStorage.setItem('housingInputs', JSON.stringify(inputs));
  }, [inputs]);

  const handleChange = (e) => {
    handleInputChange(e, inputs, setInputs);
  };

  return (
    <main>
      <Form title="What Home?">
        <h2 className="form-header">PITI</h2>
        <Input
          label="Cost"
          value={inputs.cost}
          handleChange={handleChange}
          name="cost"
        />
        <Input
          label="Down Payment(%)"
          value={inputs.down}
          handleChange={handleChange}
          name="down"
        />
        <Input
          label="Interest"
          value={inputs.interest}
          handleChange={handleChange}
          name="interest"
        />
        <Input
          label="Years"
          value={inputs.years}
          handleChange={handleChange}
          name="years"
        />
        <Input
          label="Property Tax"
          value={inputs.propertyTax}
          handleChange={handleChange}
          name="propertyTax"
        />
        <Input
          label="Property Ins"
          value={inputs.propertyInsurance}
          handleChange={handleChange}
          name="propertyInsurance"
        />
        <Input
          label="HOA"
          value={inputs.hoa}
          handleChange={handleChange}
          name="hoa"
        />

        <h2 className="form-header">Utilities</h2>

        <Input
          label="Electric"
          value={inputs.electric}
          handleChange={handleChange}
          name="electric"
        />
        <Input
          label="Water"
          value={inputs.water}
          handleChange={handleChange}
          name="water"
        />
        <Input
          label="Gas"
          value={inputs.gas}
          handleChange={handleChange}
          name="gas"
        />
        <Input
          label="Internet"
          value={inputs.internet}
          handleChange={handleChange}
          name="internet"
        />
        <Input
          label="Misc"
          value={inputs.misc}
          handleChange={handleChange}
          name="misc"
        />

        <h2 className="form-header">Maintenance</h2>

        <Input
          label="Low"
          value={inputs.maintRateLow}
          handleChange={handleChange}
          name="maintRateLow"
        />
        <Input
          label="High"
          value={inputs.maintRateHigh}
          handleChange={handleChange}
          name="maintRateHigh"
        />

        <h2 className="form-header">Costs</h2>
        <Input label="Down Payment" />
        <Input label="Property Tax" />
        <Input label="Property Insurance" />
        <Input label="Mortgage" />

        <Input label="Utilities" />
        <Input label="Maint. Low" />
        <Input label="Maint. High" />
        <Input label="Monthly Total" />
      </Form>
    </main>
  );
};

export default Housing;
