type RowObj = {
  username: string;
  plan: string;
  name: string;
  date: string | Date;
  edit: string;
};

const tableDataCheck: RowObj[] = [
  {
    username: '@vld.mihalache',
    plan: 'Expert+',
    name: 'Vlad Mihalache',
    date: 'May 24, 2023',
    edit: 'false',
  },
  {
    username: '@rsu.grafx',
    plan: 'Expert+',
    name: 'Bogdan Rusu',
    date: 'May 23, 2023',
    edit: 'true',
  },
  {
    username: '@fredyandrei',
    plan: 'Basic',
    name: 'Fredy Andrei',
    date: 'May 21, 2023',
    edit: 'true',
  },
  {
    username: '@rarestoma',
    plan: 'Power+',
    name: 'Rares Toma',
    date: 'May 20, 2023',
    edit: 'true',
  },
  {
    username: '@michael.peterson',
    plan: 'Power+',
    name: 'Michael Peterson',
    date: 'May 20, 2023',
    edit: 'false',
  },
  {
    username: '@dmitrilove',
    plan: 'Basic',
    name: 'Dmitri Love',
    date: 'May 22, 1994',
    edit: 'true',
  },
];

export default tableDataCheck;
