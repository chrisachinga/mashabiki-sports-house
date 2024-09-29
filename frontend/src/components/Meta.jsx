import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Mashabiki Sports House',
  description: 'Get Your Favorite Sports Gear at Affordable Prices',
  keywords: 'sports, buy sports gear, cheap sports gear',
};

export default Meta;
