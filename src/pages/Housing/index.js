import Form from '../../components/Form';
import Input from '../../components/Input';
import HousingLogic from './logic';

const Housing = () => {
  const { inputs, outputs, total, handleInputs } = HousingLogic();

  return (
    <main>
      <Form title="What Home?">
        <h2 className="form-header">PITI</h2>
        <Input
          label="Cost"
          value={inputs.cost}
          handleChange={handleInputs}
          name="cost"
          type="number"
        />
        <Input
          label="Down Payment(%)"
          value={inputs.down}
          handleChange={handleInputs}
          name="down"
          type="number"
        />
        <Input
          label="Interest"
          value={inputs.interest}
          handleChange={handleInputs}
          name="interest"
          type="number"
        />
        <Input
          label="Years"
          value={inputs.years}
          handleChange={handleInputs}
          name="years"
          type="number"
        />
        <Input
          label="Property Tax"
          value={inputs.propertyTax}
          handleChange={handleInputs}
          name="propertyTax"
          type="number"
          placeholder=".007"
        />
        <Input
          label="Property Ins"
          value={inputs.propertyInsurance}
          handleChange={handleInputs}
          name="propertyInsurance"
          placeholder=".0035"
          type="number"
        />
        <Input
          label="HOA"
          value={inputs.hoa}
          handleChange={handleInputs}
          name="hoa"
          type="number"
        />

        <h2 className="form-header">Utilities</h2>

        <Input
          label="Electric"
          value={inputs.electric}
          handleChange={handleInputs}
          name="electric"
          type="number"
        />
        <Input
          label="Water"
          value={inputs.water}
          handleChange={handleInputs}
          name="water"
          type="number"
        />
        <Input
          label="Gas"
          value={inputs.gas}
          handleChange={handleInputs}
          name="gas"
          type="number"
        />
        <Input
          label="Internet"
          value={inputs.internet}
          handleChange={handleInputs}
          name="internet"
          type="number"
        />
        <Input
          label="Misc"
          value={inputs.misc}
          handleChange={handleInputs}
          name="misc"
          type="number"
        />

        <h2 className="form-header">Maintenance</h2>

        <Input
          label="Low"
          value={inputs.maintRateLow}
          handleChange={handleInputs}
          name="maintRateLow"
          type="number"
          placeholder=".01"
        />
        <Input
          label="High"
          value={inputs.maintRateHigh}
          handleChange={handleInputs}
          name="maintRateHigh"
          type="number"
          placeholder=".02"
        />

        <h2 className="form-header">Costs</h2>
        <Input label="Down Payment" value={outputs.calcDown} disabled={true} />
        <Input label="Property Tax" value={outputs.calcTax} disabled={true} />
        <Input
          label="Property Insurance"
          value={outputs.calcIns}
          disabled={true}
        />
        <Input label="Mortgage" value={outputs.calcMortgage} disabled={true} />

        <Input label="Utilities" value={outputs.calcUtils} disabled={true} />
        <Input
          label="Maint. Low"
          value={outputs.calcMaintLow}
          disabled={true}
        />
        <Input
          label="Maint. High"
          value={outputs.calcMaintHigh}
          disabled={true}
        />

        <Input label="PITI" type="number" value={total.piti} disabled={true} />

        <Input label="PITI + Maint" value={total.pitiMaint} disabled={true} />
      </Form>
    </main>
  );
};

export default Housing;
