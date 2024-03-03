import { useForm } from 'react-hook-form';

import Form from '../common/form';
import { Input } from '../common';

import './searchCar.scss';

const SearchCar = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({mode: 'onChange'});

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className='search-car'>
            <div className='search-car__block'>
                <Form title='Создание поездки' onSubmit={handleSubmit(onSubmit)} isLogo={false}>
                    <div></div>
                    <Input 
                        label='Откуда вы выезжаете?'
                        name="from"
                        type="text"
                        required
                        register={register}
                        placeholder="ул Исанова"
                        error={errors.timeFrom}
                    />
                    <Input 
                        label='Куда вы едите?'
                        name="to"
                        type="text"
                        required
                        register={register}
                        placeholder="ул Ахунбаева"
                        error={errors.timeFrom}
                    />
                    <Input 
                        label='Время отправления'
                        name="timeFrom"
                        type="text"
                        required
                        register={register}
                        placeholder="00:00"
                        error={errors.timeFrom}
                    />
                    <Input 
                        label='Ожидаемая длительность поездки'
                        name="timeDuration"
                        type="text"
                        required
                        register={register}
                        placeholder="00:00"
                        error={errors.timeDuration}
                    />
                    <Input 
                        label='Цена'
                        name="price"
                        type="text"
                        required
                        register={register}
                        placeholder="0000"
                        error={errors.price}
                    />
                    <Input 
                        label='Дополнительный комментарий'
                        name="price"
                        type="text"
                        required
                        register={register}
                        placeholder="Напишите дополнительные комментариии"
                        error={errors.price}
                    />
                </Form>
            </div>
        </section>
    )
}

export default SearchCar;