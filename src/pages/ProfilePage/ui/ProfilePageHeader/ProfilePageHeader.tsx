import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps{
  className?: string,
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    const readOnly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {readOnly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            onClick={onCancelEdit}
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.editBtn}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            onClick={onSave}
                            theme={ButtonTheme.OUTLINE}
                            className={cls.saveBtn}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
