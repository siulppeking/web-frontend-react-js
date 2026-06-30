import { Helmet } from 'react-helmet-async'

export const PageMeta = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}
