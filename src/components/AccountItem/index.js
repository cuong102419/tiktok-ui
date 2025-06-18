import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Check } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c038a1b97e31a2238992cad9491f83f4~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=68d8598b&x-expires=1750327200&x-signature=OpAEVpi2PV%2FRkBPxN%2BlS%2B8FB9oc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Văn A
                    <Check className={cx('check')} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
