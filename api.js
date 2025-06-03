const axios = require('axios');

const apiKey = 'apibytokyo'; 
const query = ''; // هنا تحط البحث اللي تريده 
const filetype = 'mp4'; // or m4a

const formattedQuery = query.replace(/ /g, '_');
const apiUrl = `http://node.tokyots.xyz:2012/${filetype}/${formattedQuery}`;

async function fetchFromApi() {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey
      },
      timeout: 0 
    });

    const data = response.data;

    if (data.status !== 'ok' || !data.link) {
      console.log('❌ لم يتم العثور على الرابط الصحيح.');
      return;
    }

    console.log('✅ تم الاسترداد بنجاح:');
    console.log(`🔗 الرابط: ${data.link}`);
    console.log(`🎬 العنوان: ${data.title || 'غير معروف'}`);
    console.log(`⏱️ المدة: ${data.duration || 'غير معروفة'} ثانية`);
  } catch (error) {
    console.error('🚫 حدث خطأ أثناء الاتصال:', error.message);
  }
}


fetchFromApi();
