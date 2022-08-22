import { getQueryVariable } from '@/utils/util';

interface IConfig {
  host: string;
  uuid: string | boolean;
}
const config: IConfig = {
  host: process.env.mode === 'pro' ? 'https://w.com' : 'https://test.com',
  uuid: getQueryVariable('uuid'),
};

export default config;
