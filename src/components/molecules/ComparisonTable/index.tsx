import React from 'react';
import DirectLogo from 'resources/images/hd-logo-wrapped.svg';
import PremiereLogo from 'resources/images/hd-logo-wrapped.svg';
import Tick from 'resources/images/check.svg';
import { tableData } from 'data';
import './styles.scss';

const ComparisonTable = () => {
  return (
    <div className="comparisonTable">
      <table>
        <thead>
          <tr>
            <th className="textLeft">Cover included</th>
            <th>
              <img src={DirectLogo} alt="" />
            </th>
            <th>
              <img src={PremiereLogo} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map(({ cover, isDirect, isPremium }, index) => (
              <tr key={index}>
                <td>{cover}</td>
                <td className="comparisonTable__checklist">
                  {isDirect && (
                    <img src={Tick} alt="" className="comparisonTable__tick" />
                  )}
                </td>
                <td className="comparisonTable__checklist">
                  {isPremium && (
                    <img src={Tick} alt="" className="comparisonTable__tick" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
