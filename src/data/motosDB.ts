import { Motorcycle } from './../interfaces/Motorcycle'
const init = '/motos'

export const motosDB: Motorcycle[] = [
    {
        id: 'hondacb190r',
        brand: 'honda',
        title: 'Honda Cbr190R',
        image: init + '/hondacb190r.jpg',
        cylinder: '184.4 cc',
        torque: '16.3 Nm a 7000 rpm',
        power: '16.6 HP a 8000 rpm',
        weight: '141 kg',
        price: '11,200,000'
    }, {
        id: 'hondacbr250',
        brand: 'honda',
        title: 'Honda Cbr250 Repsol',
        image: init + '/hondacbr250.jpg',
        cylinder: '249 cc',
        torque: '22.9 Nm a 7.000 rpm',
        power: '26 CV a 8.500 rpm',
        weight: '166 Kg',
        price: '26,000,000'
    }, {
        id: 'hondatornado',
        brand: 'honda',
        title: 'Honda Tornado 250',
        image: init + '/hondatornado.png',
        cylinder: '249 cc',
        torque: '23,73 Nm a 6000 rpm',
        power: '23.3 hp @ 7,500 rpm',
        weight: '134 kg',
        price: '17,000,000'
    }, {
        id: 'ktm200ng',
        brand: 'ktm',
        title: 'Ktm 200 NG',
        image: init + '/ktm200ng.jpg',
        cylinder: '199.5 cc',
        torque: '19.2 Nm @ 8.000 rpm',
        power: '25 Hp @ 10.000 rpm',
        weight: '150.3 kg',
        price: '17,000,000'
    }, {
        id: 'ktm390rc',
        brand: 'ktm',
        title: 'Ktm 390',
        image: init + '/ktm390rc.png',
        cylinder: '375 cc',
        torque: '37 Nm a unas 9 mil vueltas por minuto',
        power: '43.3 caballos de fuerza a 9 mil revoluciones',
        weight: '149 kg',
        price: '24,000,000'
    }, {
        id: 'ktm690',
        brand: 'ktm',
        title: 'Ktm 690',
        image: init + '/ktm690.jpeg',
        cylinder: '690 cc',
        torque: '70 Nm a 6500 rpm',
        power: '72 hp a 8000 rpm',
        weight: '146 kg',
        price: ' 68,990,000'
    }, {
        id: 'yamahamt15',
        brand: 'yamaha',
        title: 'Yamaha Mt 15',
        image: init + '/yamahamt15.png',
        cylinder: '155 cc',
        torque: '14.7 NM a 8,500 RPM',
        power: '14.2 kW a 10,000 RPM',
        weight: '133 Kg',
        price: '16,000,000'
    }, {
        id: 'yamahaxmax300',
        brand: 'yamaha',
        title: 'Yamaha Xmax 300',
        image: init + '/yamahaxmax300.png',
        cylinder: '184.4 cc',
        torque: '29.0 Nm a 5750 rpm',
        power: ' 27.6 Hp a 7250 rpm',
        weight: '179 kg',
        price: '34,000,000'
    }, {
        id: 'yamahaxtz250',
        brand: 'yamaha',
        title: 'Yamaha Mt 15',
        image: init + '/yamahaxtz250.png',
        cylinder: '184.4 cc',
        torque: '20.5 Nm a 6500 rpm',
        power: '20.4 Hp a 8000 rpm',
        weight: '152 Kg',
        price: '22,500,000'
    }, {
        id: 'kawasakikx250',
        brand: 'kawasaki',
        title: 'Kawasaki Kx250',
        image: init + '/kawasakikx250.jpg',
        cylinder: '249 cc',
        torque: '20.5 Nm a 6500 rpm',
        power: '20.4 Hp a 8000 rpm',
        weight: '105.5 Kg',
        price: '20,500,000'
    }, {
        id: 'kawasakininja400',
        brand: 'kawasaki',
        title: 'Kawasaki Ninja 400',
        image: init + '/kawasakininja400.jpg',
        cylinder: '184.4 cc',
        torque: '34 hp',
        power: '44.8 HP @ 10000 rpm',
        weight: '164 kg',
        price: '35,990,000.'
    }, {
        id: 'kawasakiz1000',
        brand: 'kawasaki',
        title: 'Kawasaki Z1000',
        image: init + '/kawasakiz1000.jpg',
        cylinder: '184.4 cc',
        torque: '140 HP @ 10000 rpm',
        power: 'Torque máximo: 111 Nm 7300 rpm',
        weight: '221 kg',
        price: '39,900,000'
    }
]