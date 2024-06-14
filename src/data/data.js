const data = [
    {id : 1,title : 'کفش ملی',text : 'در حد نو',price : '200000',image : '/images/image.webp'},
    {id : 2,title : 'صندلی داغ',text : 'دست دو ', price : '3000000', image : '/images/image.webp'},
    {id : 3,title : 'میز تحریر',text : 'در حد نو', price : '4000000', image : '/images/image.webp' }, 
    {id : 4,title : 'تلوزیون ال سی دی',text : 'کارکرده', price : '6000000', image : '/images/image.webp'},
    {id : 5,title : 'دوچرخه',text : 'کار کرده', price : '10000000', image : '/images/image.webp'},
    {id : 6,title : 'گلدان ',text : 'گل سانسوریا', price : '500000', image : '/images/image.webp'},
    {id : 7,title : 'یخچال',text : 'دست دو', price : '5000000', image : '/images/image.webp'},
    {id : 8,title : 'قابلمه',text : 'نو ', price : '400000', image : '/images/image.webp'},
    {id : 9,title : 'ماشین لباس شویی',text : 'در حد نو', price : '4500000', image : '/images/image.webp'},
    {id : 10,title : 'فرش ساروق',text : 'دست دو', price : '6400000', image : '/images/image.webp'},
    {id : 11,title : 'اسکیت',text : 'حرفه ای نو', price : '5900000', image : '/images/image.webp'},
    {id : 12,title : 'کرزه گلی',text : 'صنایع دستی', price : '90000', image : '/images/image.webp'},
    {id : 13,title : 'مبل',text : 'دست دو', price : '7000', image : '/images/image.webp'},
    {id : 14,title : 'میز تلوزیون',text : 'نو', price : '5500000', image : '/images/image.webp'},
    {id : 15,title : 'شارژر مبایل',text : 'کار کرده', price : '40000', image : '/images/image.webp'},
    {id : 16,title : 'مبایل',text : 'دست دو', price : '770000', image : '/images/image.webp'},
    {id : 17,title : 'پارچ آب',text : 'کوزه ای نو', price : '340000', image : '/images/image.webp'},
    {id : 18,title : 'فرش ایرانی',text : 'نو نو', price : '3220000', image : '/images/image.webp'},
    {id : 19,title : 'صندلی تکی',text : 'کارکرده در حد نو', price : '1200000', image : '/images/image.webp'},
    {id : 20,title : 'میزآشپزخانه ',text : 'از تولید به مصرف', price : '7800000', image : '/images/image.webp'},
];

export const getAllData = () =>{
    return data;
};

export const findData = (id) => {
    return data.find(d => d.id === id );

}

