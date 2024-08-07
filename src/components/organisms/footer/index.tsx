import Icon from 'components/atoms/icon';
import ScrollTop from 'components/atoms/scroll-top';
import { SOCIAL_LIST } from 'consts/common';
import { mapClassnames, mapModifiers } from 'helpers/components';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface FooterProps {
  className?: string;
  address1: string;
  address2: string;
  phone1: string;
  phone2: string;
  email: string;
  fax: string;
}

const Footer: React.FC<FooterProps> = ({ className: addClass, address1, address2, phone1, phone2, email, fax }) => {
  const className = mapModifiers('o-footer');
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  return (
    <footer className={classNames}>
      <ScrollTop className="o-footer__scroll-top" />
      <div className="o-footer__inner a-animated-fadein a-animated-block">
        <ul className="o-footer__menu">
          <li className="o-footer__menu-item">
            {(phone1 || phone2) && (
              <>
                <span className="o-footer__menu-icon">
                  <Icon iconName="phone" />
                </span>
                <div className="o-footer__menu-content">
                  {phone1 && (
                    <p>
                      <Link href={'tel:' + phone1.replace(/[^\d]/g, '')}>
                        <a>{phone1}</a>
                      </Link>
                    </p>
                  )}
                  {phone2 && (
                    <p>
                      <Link href={'tel:' + phone2.replace(/[^\d]/g, '')}>
                        <a>{phone2}</a>
                      </Link>
                    </p>
                  )}
                </div>
              </>
            )}
          </li>
          <li className="o-footer__menu-item">
            {(address1 || address2) && (
              <>
                <span className="o-footer__menu-icon">
                  <Icon iconName="map-marker" />
                </span>
                <div className="o-footer__menu-content">
                  {address1 && router.locale !== 'ja' && (
                    <p>
                      <strong className="text-underline">Trụ sở chính: </strong>
                      <br />
                      {address1}
                    </p>
                  )}
                  {address1 && router.locale === 'ja' && (
                    <p>
                      <strong>本社</strong>
                      <br />
                      {address1}
                    </p>
                  )}
                  {address2 && (
                    <p className="mt-12">
                      <strong className="text-underline">Văn phòng chi nhánh: </strong>
                      <br />
                      {address2}
                    </p>
                  )}
                </div>
              </>
            )}
          </li>
          <li className="o-footer__menu-item">
            {email && (
              <>
                <span className="o-footer__menu-icon">
                  <Icon iconName="mail" />
                </span>
                <div className="o-footer__menu-content">
                  <p>
                    <Link href={'mailto:' + email}>
                      <a>{email}</a>
                    </Link>
                  </p>
                </div>
              </>
            )}
          </li>
          <li className="o-footer__menu-item">
            {fax && (
              <>
                <span className="o-footer__menu-icon">
                  <Icon iconName="fax" />
                </span>
                <div className="o-footer__menu-content">
                  <p>{fax}</p>
                </div>
              </>
            )}
          </li>
        </ul>
        <div className="o-footer__bottom">
          <ul className="o-footer__social">
            {SOCIAL_LIST.map((v, i) => (
              <li key={i} className="o-footer__social-item">
                <Link href={v.url}>
                  <a target="_blank" aria-label="vtitle">
                    <Icon iconName={v.title} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <small className="o-footer__copyright">
            Copyright &copy; 2021 Lampart Co.,Ltd. All Right Reserved.
            <br />
            Your privacy on our site is protected by reCAPTCHA and is subject to Google's{' '}
            <a href="https://policies.google.com/privacy" target="_blank" className="policy-link">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" target="_blank" className="policy-link">
              Terms
            </a>
            .
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
