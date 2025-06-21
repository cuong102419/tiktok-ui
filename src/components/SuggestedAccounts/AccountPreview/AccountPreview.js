import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { CheckIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_e184cfc3e3510b4a3e2af41540253ea0.jpeg?from=327834062&se=false&biz_tag=feed_avatar&l=202506220014263C01B393E7F3687019A3"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ahihi23</strong>
                    <CheckIcon className={cx('check')} />
                </p>
                <p className={cx('name')}>Ahihi</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
