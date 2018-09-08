import React from 'react';
import {Text} from 'react-native';

// export default () => <Text style={{marginTop: 30}}>Example Text!</Text>
// transpiles to
export default function() {
    return React.createElement(
        Text,
        {style: {marginTop: 30}},
        'Example Text!'
    );
}
const SomeButton = ({ type , ...other }) => {
    const className = type === "blue" ? "BlueButton" : "GrayButton";
    return <button className={className} {...other} />;
};

// Play with babel transpilation online:
// https://goo.gl/RjMXKC
// or
// https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4AoUSWOAbwBUkAPGAXzm1wKPRgFoAdihjAAbkjLlyzavAAmSTCgCuAG3gAKAJRwAvAD44AHkYs4AZxgBPVUl21aIFFADmwAfQhgAXHADMAAysrPoAokwo4LZwpjAAhEYA9LH6UkA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=react&prettier=false&targets=&version=6.26.0&envVersion=
