import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d754fe9bcc36baf4a83dcb1eee73dd0f~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=c6e943f9&x-expires=1750226400&x-signature=ftbXiCTpKlNs%2FZTNk%2F7feIo2oGo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Văn A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
