import React, { memo } from "react";

function InformationTable({ data }) {
  return (
    <table className="product-information-table">
      <tbody>
        {data &&
          data.map((tr) => {
            return (
              <tr key={tr.id}>
                <th className="product-information-th">{tr?.th}</th>
                <td className="product-information-td">
                  {tr?.options.map(
                    (option, index) =>
                      option.name +
                      `${index === tr?.options.length - 1 ? " " : " , "}`
                  )}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default memo(InformationTable);
