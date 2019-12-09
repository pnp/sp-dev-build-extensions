import * as React from 'react';
import styles from './DevopsReact.module.scss';
import { IDevopsReactProps } from './IDevopsReactProps';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib-commonjs/Persona';
import { DefaultButton } from 'office-ui-fabric-react/lib-commonjs/Button';

const DevopsReact = (props: IDevopsReactProps) => {
  const [renderDetails, updateRenderDetails] = React.useState(true);
  const [mathValue, setMathValue] = React.useState(props.mathValue);
  const buttonClick = () => {
    setMathValue(props.addNumbers(mathValue, 1));
  };
  return (//the second button is to demonstrate mock functions in jest
    <div className={styles.devopsReact}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.title}>Current complex value</span>
            <p className={styles.subTitle}>{mathValue}</p>
            <DefaultButton text="Add one to value" onClick={buttonClick} />
            <button onClick={buttonClick} />
          </div>
        </div>
      </div>
      <Persona
         text={`${props.user.FirstName} ${props.user.LastName}`}
         secondaryText={props.user.JobTitle}
         tertiaryText={props.user.Email}
         imageUrl={`data:image/jpg;base64,${props.user.Photo}`}
         size={PersonaSize.size100}
         presence={PersonaPresence.blocked}
         hidePersonaDetails={!renderDetails}
      />
    </div>
  );
};
export default DevopsReact;
