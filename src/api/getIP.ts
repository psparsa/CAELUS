interface Connection {
  autonomous_system_number: number;
  autonomous_system_organization: string;
  connection_type: string;
  isp_name: string;
  organization_name: string;
}

interface Currency {
  currency_name: string;
  currency_code: string;
}

interface Flag {
  emoji: string;
  unicode: string;
  png: string;
  svg: string;
}

interface Security {
  is_vpn: boolean;
}

interface Timezone {
  name: string;
  abbreviation: string;
  gmt_offset: number;
  current_time: string;
  is_dst: boolean;
}

type Response = {
  ip_address: string;
  city: string;
  city_geoname_id: number;
  region: string;
  region_iso_code: string;
  region_geoname_id: number;
  postal_code: string;
  country: string;
  country_code: string;
  country_geoname_id: number;
  country_is_eu: boolean;
  continent: string;
  continent_code: string;
  continent_geoname_id: number;
  longitude: number;
  latitude: number;
  security: Security;
  timezone: Timezone;
  flag: Flag;
  currency: Currency;
  connection: Connection;
};

const API_KEY = process.env.ABSTRACT_API_KEY;
export const getIP = async () => {
  try {
    const f = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`
    );
    const response = (await f.json()) as Response;
    return response;
  } catch (e) {
    console.log("Ping:", e);
    throw new Error();
  }
};
