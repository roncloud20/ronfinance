// RegistrationForm.js
// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    country: null, // Selected country option
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const countries = [
    { label: 'Afghanistan', value: 'AF', phoneCode: '+93' },
    { label: 'Albania', value: 'AL', phoneCode: '+355' },
    { label: 'Algeria', value: 'DZ', phoneCode: '+213' },
    { label: 'Andorra', value: 'AD', phoneCode: '+376' },
    { label: 'Angola', value: 'AO', phoneCode: '+244' },
    { label: 'Antigua and Barbuda', value: 'AG', phoneCode: '+1' },
    { label: 'Argentina', value: 'AR', phoneCode: '+54' },
    { label: 'Armenia', value: 'AM', phoneCode: '+374' },
    { label: 'Australia', value: 'AU', phoneCode: '+61' },
    { label: 'Austria', value: 'AT', phoneCode: '+43' },
    { label: 'Azerbaijan', value: 'AZ', phoneCode: '+994' },
    { label: 'Bahamas', value: 'BS', phoneCode: '+1' },
    { label: 'Bahrain', value: 'BH', phoneCode: '+973' },
    { label: 'Bangladesh', value: 'BD', phoneCode: '+880' },
    { label: 'Barbados', value: 'BB', phoneCode: '+1' },
    { label: 'Belarus', value: 'BY', phoneCode: '+375' },
    { label: 'Belgium', value: 'BE', phoneCode: '+32' },
    { label: 'Belize', value: 'BZ', phoneCode: '+501' },
    { label: 'Benin', value: 'BJ', phoneCode: '+229' },
    { label: 'Bhutan', value: 'BT', phoneCode: '+975' },
    { label: 'Bolivia', value: 'BO', phoneCode: '+591' },
    { label: 'Bosnia and Herzegovina', value: 'BA', phoneCode: '+387' },
    { label: 'Botswana', value: 'BW', phoneCode: '+267' },
    { label: 'Brazil', value: 'BR', phoneCode: '+55' },
    { label: 'Brunei', value: 'BN', phoneCode: '+673' },
    { label: 'Bulgaria', value: 'BG', phoneCode: '+359' },
    { label: 'Burkina Faso', value: 'BF', phoneCode: '+226' },
    { label: 'Burundi', value: 'BI', phoneCode: '+257' },
    { label: 'Cabo Verde', value: 'CV', phoneCode: '+238' },
    { label: 'Cambodia', value: 'KH', phoneCode: '+855' },
    { label: 'Cameroon', value: 'CM', phoneCode: '+237' },
    { label: 'Canada', value: 'CA', phoneCode: '+1' },
    { label: 'Central African Republic', value: 'CF', phoneCode: '+236' },
    { label: 'Chad', value: 'TD', phoneCode: '+235' },
    { label: 'Chile', value: 'CL', phoneCode: '+56' },
    { label: 'China', value: 'CN', phoneCode: '+86' },
    { label: 'Colombia', value: 'CO', phoneCode: '+57' },
    { label: 'Comoros', value: 'KM', phoneCode: '+269' },
    { label: 'Congo (Congo-Brazzaville)', value: 'CG', phoneCode: '+242' },
    { label: 'Costa Rica', value: 'CR', phoneCode: '+506' },
    { label: 'Croatia', value: 'HR', phoneCode: '+385' },
    { label: 'Cuba', value: 'CU', phoneCode: '+53' },
    { label: 'Cyprus', value: 'CY', phoneCode: '+357' },
    { label: 'Czechia (Czech Republic)', value: 'CZ', phoneCode: '+420' },
    { label: 'Democratic Republic of the Congo', value: 'CD', phoneCode: '+243' },
    { label: 'Denmark', value: 'DK', phoneCode: '+45' },
    { label: 'Djibouti', value: 'DJ', phoneCode: '+253' },
    { label: 'Dominica', value: 'DM', phoneCode: '+1' },
    { label: 'Dominican Republic', value: 'DO', phoneCode: '+1' },
    { label: 'Ecuador', value: 'EC', phoneCode: '+593' },
    { label: 'Egypt', value: 'EG', phoneCode: '+20' },
    { label: 'El Salvador', value: 'SV', phoneCode: '+503' },
    { label: 'Equatorial Guinea', value: 'GQ', phoneCode: '+240' },
    { label: 'Eritrea', value: 'ER', phoneCode: '+291' },
    { label: 'Estonia', value: 'EE', phoneCode: '+372' },
    { label: 'Eswatini', value: 'SZ', phoneCode: '+268' },
    { label: 'Ethiopia', value: 'ET', phoneCode: '+251' },
    { label: 'Fiji', value: 'FJ', phoneCode: '+679' },
    { label: 'Finland', value: 'FI', phoneCode: '+358' },
    { label: 'France', value: 'FR', phoneCode: '+33' },
    { label: 'Gabon', value: 'GA', phoneCode: '+241' },
    { label: 'Gambia', value: 'GM', phoneCode: '+220' },
    { label: 'Georgia', value: 'GE', phoneCode: '+995' },
    { label: 'Germany', value: 'DE', phoneCode: '+49' },
    { label: 'Ghana', value: 'GH', phoneCode: '+233' },
    { label: 'Greece', value: 'GR', phoneCode: '+30' },
    { label: 'Grenada', value: 'GD', phoneCode: '+1' },
    { label: 'Guatemala', value: 'GT', phoneCode: '+502' },
    { label: 'Guinea', value: 'GN', phoneCode: '+224' },
    { label: 'Guinea-Bissau', value: 'GW', phoneCode: '+245' },
    { label: 'Guyana', value: 'GY', phoneCode: '+592' },
    { label: 'Haiti', value: 'HT', phoneCode: '+509' },
    { label: 'Honduras', value: 'HN', phoneCode: '+504' },
    { label: 'Hungary', value: 'HU', phoneCode: '+36' },
    { label: 'Iceland', value: 'IS', phoneCode: '+354' },
    { label: 'India', value: 'IN', phoneCode: '+91' },
    { label: 'Indonesia', value: 'ID', phoneCode: '+62' },
    { label: 'Iran', value: 'IR', phoneCode: '+98' },
    { label: 'Iraq', value: 'IQ', phoneCode: '+964' },
    { label: 'Ireland', value: 'IE', phoneCode: '+353' },
    { label: 'Israel', value: 'IL', phoneCode: '+972' },
    { label: 'Italy', value: 'IT', phoneCode: '+39' },
    { label: 'Jamaica', value: 'JM', phoneCode: '+1' },
    { label: 'Japan', value: 'JP', phoneCode: '+81' },
    { label: 'Jordan', value: 'JO', phoneCode: '+962' },
    { label: 'Kazakhstan', value: 'KZ', phoneCode: '+7' },
    { label: 'Kenya', value: 'KE', phoneCode: '+254' },
    { label: 'Kiribati', value: 'KI', phoneCode: '+686' },
    { label: 'Kuwait', value: 'KW', phoneCode: '+965' },
    { label: 'Kyrgyzstan', value: 'KG', phoneCode: '+996' },
    { label: 'Laos', value: 'LA', phoneCode: '+856' },
    { label: 'Latvia', value: 'LV', phoneCode: '+371' },
    { label: 'Lebanon', value: 'LB', phoneCode: '+961' },
    { label: 'Lesotho', value: 'LS', phoneCode: '+266' },
    { label: 'Liberia', value: 'LR', phoneCode: '+231' },
    { label: 'Libya', value: 'LY', phoneCode: '+218' },
    { label: 'Liechtenstein', value: 'LI', phoneCode: '+423' },
    { label: 'Lithuania', value: 'LT', phoneCode: '+370' },
    { label: 'Luxembourg', value: 'LU', phoneCode: '+352' },
    { label: 'Madagascar', value: 'MG', phoneCode: '+261' },
    { label: 'Malawi', value: 'MW', phoneCode: '+265' },
    { label: 'Malaysia', value: 'MY', phoneCode: '+60' },
    { label: 'Maldives', value: 'MV', phoneCode: '+960' },
    { label: 'Mali', value: 'ML', phoneCode: '+223' },
    { label: 'Malta', value: 'MT', phoneCode: '+356' },
    { label: 'Marshall Islands', value: 'MH', phoneCode: '+692' },
    { label: 'Mauritania', value: 'MR', phoneCode: '+222' },
    { label: 'Mauritius', value: 'MU', phoneCode: '+230' },
    { label: 'Mexico', value: 'MX', phoneCode: '+52' },
    { label: 'Micronesia', value: 'FM', phoneCode: '+691' },
    { label: 'Moldova', value: 'MD', phoneCode: '+373' },
    { label: 'Monaco', value: 'MC', phoneCode: '+377' },
    { label: 'Mongolia', value: 'MN', phoneCode: '+976' },
    { label: 'Montenegro', value: 'ME', phoneCode: '+382' },
    { label: 'Morocco', value: 'MA', phoneCode: '+212' },
    { label: 'Mozambique', value: 'MZ', phoneCode: '+258' },
    { label: 'Myanmar (Burma)', value: 'MM', phoneCode: '+95' },
    { label: 'Namibia', value: 'NA', phoneCode: '+264' },
    { label: 'Nauru', value: 'NR', phoneCode: '+674' },
    { label: 'Nepal', value: 'NP', phoneCode: '+977' },
    { label: 'Netherlands', value: 'NL', phoneCode: '+31' },
    { label: 'New Zealand', value: 'NZ', phoneCode: '+64' },
    { label: 'Nicaragua', value: 'NI', phoneCode: '+505' },
    { label: 'Niger', value: 'NE', phoneCode: '+227' },
    { label: 'Nigeria', value: 'NG', phoneCode: '+234' },
    { label: 'North Korea', value: 'KP', phoneCode: '+850' },
    { label: 'North Macedonia', value: 'MK', phoneCode: '+389' },
    { label: 'Norway', value: 'NO', phoneCode: '+47' },
    { label: 'Oman', value: 'OM', phoneCode: '+968' },
    { label: 'Pakistan', value: 'PK', phoneCode: '+92' },
    { label: 'Palau', value: 'PW', phoneCode: '+680' },
    { label: 'Panama', value: 'PA', phoneCode: '+507' },
    { label: 'Papua New Guinea', value: 'PG', phoneCode: '+675' },
    { label: 'Paraguay', value: 'PY', phoneCode: '+595' },
    { label: 'Peru', value: 'PE', phoneCode: '+51' },
    { label: 'Philippines', value: 'PH', phoneCode: '+63' },
    { label: 'Poland', value: 'PL', phoneCode: '+48' },
    { label: 'Portugal', value: 'PT', phoneCode: '+351' },
    { label: 'Qatar', value: 'QA', phoneCode: '+974' },
    { label: 'Romania', value: 'RO', phoneCode: '+40' },
    { label: 'Russia', value: 'RU', phoneCode: '+7' },
    { label: 'Rwanda', value: 'RW', phoneCode: '+250' },
    { label: 'Saint Kitts and Nevis', value: 'KN', phoneCode: '+1' },
    { label: 'Saint Lucia', value: 'LC', phoneCode: '+1' },
    { label: 'Saint Vincent and the Grenadines', value: 'VC', phoneCode: '+1' },
    { label: 'Samoa', value: 'WS', phoneCode: '+685' },
    { label: 'San Marino', value: 'SM', phoneCode: '+378' },
    { label: 'Sao Tome and Principe', value: 'ST', phoneCode: '+239' },
    { label: 'Saudi Arabia', value: 'SA', phoneCode: '+966' },
    { label: 'Senegal', value: 'SN', phoneCode: '+221' },
    { label: 'Serbia', value: 'RS', phoneCode: '+381' },
    { label: 'Seychelles', value: 'SC', phoneCode: '+248' },
    { label: 'Sierra Leone', value: 'SL', phoneCode: '+232' },
    { label: 'Singapore', value: 'SG', phoneCode: '+65' },
    { label: 'Slovakia', value: 'SK', phoneCode: '+421' },
    { label: 'Slovenia', value: 'SI', phoneCode: '+386' },
    { label: 'Solomon Islands', value: 'SB', phoneCode: '+677' },
    { label: 'Somalia', value: 'SO', phoneCode: '+252' },
    { label: 'South Africa', value: 'ZA', phoneCode: '+27' },
    { label: 'South Korea', value: 'KR', phoneCode: '+82' },
    { label: 'South Sudan', value: 'SS', phoneCode: '+211' },
    { label: 'Spain', value: 'ES', phoneCode: '+34' },
    { label: 'Sri Lanka', value: 'LK', phoneCode: '+94' },
    { label: 'Sudan', value: 'SD', phoneCode: '+249' },
    { label: 'Suriname', value: 'SR', phoneCode: '+597' },
    { label: 'Sweden', value: 'SE', phoneCode: '+46' },
    { label: 'Switzerland', value: 'CH', phoneCode: '+41' },
    { label: 'Syria', value: 'SY', phoneCode: '+963' },
    { label: 'Taiwan', value: 'TW', phoneCode: '+886' },
    { label: 'Tajikistan', value: 'TJ', phoneCode: '+992' },
    { label: 'Tanzania', value: 'TZ', phoneCode: '+255' },
    { label: 'Thailand', value: 'TH', phoneCode: '+66' },
    { label: 'Timor-Leste', value: 'TL', phoneCode: '+670' },
    { label: 'Togo', value: 'TG', phoneCode: '+228' },
    { label: 'Tonga', value: 'TO', phoneCode: '+676' },
    { label: 'Trinidad and Tobago', value: 'TT', phoneCode: '+1' },
    { label: 'Tunisia', value: 'TN', phoneCode: '+216' },
    { label: 'Turkey', value: 'TR', phoneCode: '+90' },
    { label: 'Turkmenistan', value: 'TM', phoneCode: '+993' },
    { label: 'Tuvalu', value: 'TV', phoneCode: '+688' },
    { label: 'Uganda', value: 'UG', phoneCode: '+256' },
    { label: 'Ukraine', value: 'UA', phoneCode: '+380' },
    { label: 'United Arab Emirates', value: 'AE', phoneCode: '+971' },
    { label: 'United Kingdom', value: 'GB', phoneCode: '+44' },
    { label: 'United States', value: 'US', phoneCode: '+1' },
    { label: 'Uruguay', value: 'UY', phoneCode: '+598' },
    { label: 'Uzbekistan', value: 'UZ', phoneCode: '+998' },
    { label: 'Vanuatu', value: 'VU', phoneCode: '+678' },
    { label: 'Vatican City', value: 'VA', phoneCode: '+379' },
    { label: 'Venezuela', value: 'VE', phoneCode: '+58' },
    { label: 'Vietnam', value: 'VN', phoneCode: '+84' },
    { label: 'Yemen', value: 'YE', phoneCode: '+967' },
    { label: 'Zambia', value: 'ZM', phoneCode: '+260' },
    { label: 'Zimbabwe', value: 'ZW', phoneCode: '+263' },
];

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleCountryChange = (selectedCountry) => {
    setFormData({ ...formData, country: selectedCountry, phoneNumber: '' });
  };

  const handlePhoneNumberChange = (e) => {
    const { country } = formData;
    const phoneCode = country ? country.phoneCode : '';
    setFormData({ ...formData, phoneNumber: `${phoneCode}${e.target.value}` });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      // Handle password mismatch error (e.g., show an error message to the user)
      return;
    }

    try {
      // Send a POST request to your backend /register endpoint
      await axios.post('http://localhost:3000/register', formData);

      // Optionally, you can redirect the user or show a success message
      console.log('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error (e.g., show an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Registration</h1>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Country:
        <Select
          options={countries}
          value={formData.country}
          onChange={handleCountryChange}
          placeholder="Select Country"
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </label>
      <br />
      <label>
        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required />
        I agree to the Terms and Conditions
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;