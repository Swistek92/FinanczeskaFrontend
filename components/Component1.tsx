import React from "react";

const Component1 = () => {
  return (
    <div className='flex flex-col  w-full bg-gray-100 md:flex-row '>
      <div className='bg-orange-400  h-48 mr-3 mt-3 text-black w-full md:w-1/5'>
        <h2 className='text-lg bg-orange-500 '>Poslki dług publiczy </h2>
        <p>
          dług publiczny wynosi w tej chwili już ponad 1,6 biliona złotych,
          ponad 43 tys. zl
        </p>
      </div>
      <div className='bg-orange-400 h-48 mt-3 text-black w-full md:w-4/5 '>
        <h2 className='text-lg bg-orange-500'>
          Polski wzrost PKB osiąga rekordy
        </h2>
        <p>
          W ostatnim kwartale Polski PKB wzrósł o 5,8%, najwięcej od ostatnich
          10 lat. Eksperci są zdania, że to efekt inwestycji w sektorze
          technologicznym oraz rosnącego eksportu.
        </p>

        <h2 className='text-lg bg-orange-500'>Złoty umacnia się wobec euro</h2>
        <p>
          Po ostatnich decyzjach Europejskiego Banku Centralnego, złoty zyskał
          na wartości. Aktualny kurs to 4,20 zł za euro, co stanowi wzrost o 2%
          w skali miesiąca.
        </p>
      </div>
    </div>
  );
};

export default Component1;
