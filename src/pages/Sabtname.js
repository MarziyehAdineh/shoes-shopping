import React from "react";

export const Sabtname = () => {
  return (
	  <div style={{boder:"solid"}}>
	  <div id="sabt">
	  <div  id="sabtname">
      <div>
        <b> نام</b> <input type="text" required id="in" />
        <br />
        <b> نام خانوادگی</b>
        <input type="text" required id="in" /> <br />
        <b>شماره ی تلفن </b> <input type="mobile" id="in" required />
        <br />
      </div>
      <div>
        <b>تاریخ تولد</b> <input type="date" id="in" data-jdp required />
        <br />
        <b>کد پستی </b>
        <input type="number" id="in" required /> <br />
        <b>آدرس محل سکونت </b> <input type="text" id="in" required />
        <br />
      </div>
	
      <div>
        <b>ایمیل </b> <input type="email" id="in" name="email" /> <br />
        <b> لطفا استان محل سکونت خود را انتخاب نمایید </b>{" "}
        <input id="in" list="browsers" />
        <datalist id="browsers">
          <option>گیلان</option>
          <option>آذربایجان شرقی</option>
          <option>خوزستان</option>
          <option>فارس</option>
          <option>اصفهان</option>
          <option>خراسان رضوی</option>
          <option>قزوین</option>
          <option>سمنان</option>
          <option>قم</option>
          <option>مرکزی</option>
          <option>زنجان</option>
          <option>مازندران</option>
          <option>گلستان</option>
          <option>اردبیل</option>
          <option>آذربایجان غربی</option>
          <option>همدان</option>
          <option>کردستان</option>
          <option>کرمانشاه</option>
          <option>لرستان</option>
          <option>بوشهر</option>
          <option>کرمان</option>
          <option>هرمزگان</option>
          <option>چهارمحال و بختیاری</option>
          <option>یزد</option>
          <option>سیستان و بلوچستان</option>
          <option>ایلام</option>
          <option>کهگلویه و بویراحمد</option>
          <option>خراسان شمالی</option>
          <option>خراسان جنوبی</option>
          <option>البرز</option>
        </datalist>
        <b>لطفا محل سکونت خود را انتخاب نمایید</b>
        <input list="browsers" id="in" />
        <datalist id="browsers">
          <option>آذرشهر</option>
          <option>اسکو</option>
          <option>اهر</option>
          <option>بستان‌آباد</option>
          <option>بناب</option>
          <option>تبریز </option>
          <option>جلفا</option>
          <option>چاراویماق</option>
          <option>سراب</option>
          <option>شبستر</option>
          <option>عجب‌شیر</option>
          <option>کلیبر</option>
          <option>مراغه</option>
          <option>مرند</option>
          <option>ملکان</option>
          <option>میانه</option>
          <option>ورزقان</option>
          <option>هریس</option>
          <option>هشترود</option>
          <option>ارومیه</option>
          <option>اشنویه</option>
          <option>بوکان</option>
          <option>پیرانشهر</option>
          <option>تکاب</option>
          <option>چالدران</option>
          <option>خوی</option>
          <option>سردشت</option>
          <option>سلماس</option>
          <option>شاهین‌دژ</option>
          <option>ماکو</option>
          <option>مهاباد</option>
          <option>میاندوآب</option>
          <option>نقده</option>
          <option>اردبیل</option>
          <option>بیله‌سوار</option>
          <option>پارس‌آباد</option>
          <option>خلخال</option>
          <option>کوثر </option>
          <option>گِرمی</option>
          <option>مِشگین‌شهر</option>
          <option>نَمین</option>
          <option>نیر</option>
          <option>آران و بیدگل</option>
          <option>اردستان</option>
          <option>اصفهان </option>
          <option>برخوار و میمه</option>
          <option>تیران و کرون</option>
          <option>چادگان</option>
          <option>خمینی‌شهر</option>
          <option>خوانسار</option>
          <option>سمیرم</option>
          <option>شهرضا</option>
          <option>سمیرم سفلی</option>
          <option>فریدن</option>
          <option>فریدون‌شهر</option>
          <option>فلاورجان</option>
          <option>کاشان</option>
          <option>گلپایگان</option>
          <option>لنجان</option>
          <option>مبارکه</option>
          <option>نائین</option>
          <option>نجف‌آباد </option>
          <option>نطنز</option>
          <option>آبدانان</option>
          <option>ایلام</option>
          <option>ایوان</option>
          <option>دره‌شهر</option>
          <option>دهلران</option>
          <option>شیروان و چرداول</option>
          <option>مهران</option>
          <option>بوشهر</option>
          <option>تنگستان </option>
          <option>جم</option>
          <option>دشتستان</option>
          <option>دشتی</option>
          <option>دیر</option>
          <option>دیلم</option>
          <option>کنگان </option>
          <option>گناوه</option>
          <option>اسلام‌شهر</option>
          <option>پاکدشت</option>
          <option>تهران</option>
          <option>دماوند</option>
          <option>رباط‌کریم</option>
          <option>ری</option>
          <option>ساوجبلاغ</option>
          <option>شمیرانات</option>
          <option>شهریار</option>
          <option>فیروزکوه</option>
          <option>کرج </option>
          <option>نظرآباد</option>
          <option>ورامین</option>
          <option>اردل</option>
          <option>بروجن</option>
          <option>شهرکرد</option>
          <option>فارسان</option>
          <option>کوهرنگ</option>
          <option>لردگان</option>
          <option>بیرجند</option>
          <option>درمیان</option>
          <option>سرایان</option>
          <option>سربیشه</option>
          <option>فردوس</option>
          <option>قائنات</option>
          <option>نهبندان</option>
          <option>بردسکن</option>
          <option>تایباد</option>
          <option>تربت جام</option>
          <option>تربت حیدریه</option>
          <option>چناران</option>
          <option>خلیل‌آباد</option>
          <option>خواف </option>
          <option>درگز</option>
          <option>رشتخوار</option>
          <option>سبزوار </option>
          <option>سرخس</option>
          <option>فریمان</option>
          <option>قوچان</option>
          <option>کاشمر</option>
          <option>کلات</option>
          <option>گناباد</option>
          <option>مشهد</option>
          <option>مه ولات</option>
          <option>نیشابور</option>
          <option>اسفراین</option>
          <option>بجنورد </option>
          <option>جاجرم</option>
          <option>شیروان</option>
          <option>فاروج</option>
          <option>مانه و سملقان</option>
          <option>آبادان</option>
          <option>امیدیه</option>
          <option>اندیمشک</option>
          <option>اهواز</option>
          <option>ایذه</option>
          <option>باغ‌ملک</option>
          <option>بندر ماهشهر</option>
          <option>بهبهان</option>
          <option>خرمشهر</option>
          <option>دزفول</option>
          <option>دشت آزادگان</option>
          <option>رامشیر</option>
          <option>رامهرمز</option>
          <option>شادگان</option>
          <option>شوش</option>
          <option>شوشتر</option>
          <option>گتوند</option>
          <option>لالی</option>
          <option>مسجد سلیمان</option>
          <option>هندیجان</option>
          <option>ابهر</option>
          <option>ایجرود</option>
          <option>خدابنده</option>
          <option>خرمدره</option>
          <option>زنجان </option>
          <option>طارم</option>
          <option>ماه‌نشان</option>
          <option>دامغان</option>
          <option>سمنان</option>
          <option>شاهرود</option>
          <option>گرمسار</option>
          <option>مهدی‌شهر</option>
          <option>ایرانشهر </option>
          <option>چابهار</option>
          <option>خاش</option>
          <option>دلگان</option>
          <option>زابل</option>
          <option>زاهدان</option>
          <option>زهک</option>
          <option>سراوان</option>
          <option>سرباز</option>
          <option>کنارک</option>
          <option>نیک‌شهر</option>
          <option>آباده </option>
          <option>ارسنجان</option>
          <option>استهبان </option>
          <option>اقلید</option>
          <option>بوانات</option>
          <option>پاسارگاد</option>
          <option>جهرم</option>
          <option>خرم‌بید</option>
          <option>خنج</option>
          <option>داراب</option>
          <option>زرین‌دشت</option>
          <option>سپیدان</option>
          <option>شیراز</option>
          <option>فراشبند</option>
          <option>فسا</option>
          <option>فیروزآباد</option>
          <option>قیر و کارزین</option>
          <option>کازرون</option>
          <option>لارستان</option>
          <option>لامِرد</option>
          <option>مرودشت </option>
          <option>ممسنی</option>
          <option>مهر</option>
          <option>نی‌ریز</option>
          <option>آبیک</option>
          <option>البرز</option>
          <option>بوئین‌زهرا</option>
          <option>تاکستان</option>
          <option>قزوین</option>
          <option>قم</option>
          <option>بانه </option>
          <option>بیجار</option>
          <option>دیواندره</option>
          <option>سروآباد</option>
          <option>سقز </option>
          <option>سنندج</option>
          <option>قروه</option>
          <option>کامیاران</option>
          <option>مریوان</option>
          <option>بافت</option>
          <option>بردسیر</option>
          <option>بم</option>
          <option>جیرفت</option>
          <option>راور</option>
          <option>رفسنجان</option>
          <option>رودبار جنوب</option>
          <option>زرند</option>
          <option>سیرجان</option>
          <option>شهر بابک</option>
          <option>عنبرآباد</option>
          <option>قلعه گنج </option>
          <option>کرمان</option>
          <option>کوهبنان</option>
          <option>کهنوج</option>
          <option>منوجان</option>
          <option>اسلام‌آباد غرب</option>
          <option>پاوه</option>
          <option>ثلاث باباجانی</option>
          <option>جوانرود</option>
          <option>دالاهو</option>
          <option>روانسر</option>
          <option>سرپل ذهاب</option>
          <option>سنقر</option>
          <option>صحنه</option>
          <option>قصر شیرین</option>
          <option>کرمانشاه </option>
          <option>کنگاور</option>
          <option>گیلان غرب</option>
          <option>هرسین</option>
          <option>بویراحمد</option>
          <option>بهمئی</option>
          <option>دنا</option>
          <option>کهگیلویه</option>
          <option>گچساران</option>
          <option>آزادشهر</option>
          <option>آزادشهر</option>
          <option>آق‌قلا</option>
          <option>بندر گز</option>
          <option>ترکمن </option>
          <option>رامیان</option>
          <option>علی‌آباد</option>
          <option>کردکوی</option>
          <option>کلاله</option>
          <option>گرگان </option>
          <option>گنبد کاووس</option>
          <option>مراوه‌تپه</option>
          <option>مینودشت</option>
          <option>آستارا</option>
          <option>آستانه اشرفیه</option>
          <option>اَملَش</option>
          <option>بندر انزلی</option>
          <option>رشت</option>
          <option>رضوانشهر</option>
          <option>رودبار</option>
          <option>رودسر</option>
          <option>سیاهکل</option>
          <option>شَفت</option>
          <option>صومعه‌سرا</option>
          <option>طوالش</option>
          <option>فومَن</option>
          <option>لاهیجان </option>
          <option>لنگرود</option>
          <option>ماسال</option>
          <option>ازنا</option>
          <option>اليگودرز</option>
          <option>بروجرد</option>
          <option>پل‌دختر</option>
          <option>خرم‌آباد </option>
          <option>دورود</option>
          <option>دلفان </option>
          <option>سلسله</option>
          <option>کوهدشت</option>
          <option>آمل</option>
          <option>بابل</option>
          <option>بابلسر</option>
          <option>بهشهر</option>
          <option>تنکابن</option>
          <option>جويبار</option>
          <option>چالوس</option>
          <option>رامسر</option>
          <option>ساري</option>
          <option>سوادکوه </option>
          <option>قائم‌شهر</option>
          <option>گلوگاه</option>
          <option>محمودآباد</option>
          <option>نکا</option>
          <option>نور</option>
          <option>نوشهر</option>
          <option>آشتيان</option>
          <option>اراک</option>
          <option>تفرش</option>
          <option>خمين</option>
          <option>دليجان </option>
          <option>زرنديه</option>
          <option>ساوه</option>
          <option>شازند</option>
          <option>کميجان</option>
          <option>محلات</option>
          <option>ابوموسي</option>
          <option>بستک</option>
          <option>بندر عباس</option>
          <option>بندر لنگه</option>
          <option>جاسک</option>
          <option>حاجي‌آباد</option>
          <option>خمير </option>
          <option>رودان</option>
          <option>قشم</option>
          <option>گاوبندي</option>
          <option>ميناب</option>
          <option>اسدآباد</option>
          <option>بهار</option>
          <option>تويسرکان</option>
          <option>رزن </option>
          <option>کبودرآهنگ</option>
          <option>ملاير</option>
          <option>نهاوند</option>
          <option>همدان</option>
          <option>ابرکوه</option>
          <option>اردکان</option>
          <option>بافق </option>
          <option>تفت</option>
          <option>خاتم</option>
          <option>صدوق</option>
          <option>طبس</option>
          <option>مهريز</option>
          <option>مِيبُد</option>
          <option>يزد</option>
        </datalist>
      </div>
	  
	<br/>
	</div>
	</div>
	<br/>
	  <br/>
	<input style={{width:"120px"}} type="button" value="ثبت"className="btn btn-primary" />

	</div>
  );
};
