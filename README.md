Hi ! family of developer :)
=====================================
简单把aliyun的sdk nodejs版本封装一下方便meteor使用。
欢迎关注
[FAMI](http://www.fami2u.com)
------------------------------
使用方式：

			//server/server.js 		

			Meteor.startup(function (){		
				var oss = new ALY.OSS({		
					accessKeyId: "accessKeyId",		
					secretAccessKey: "secretAccessKey",		
					endpoint: 'http://oss-cn-beijing.	aliyuncs.com',		
					apiVersion: '2013-10-15'		
				});		

				oss.listBuckets(function (err, data) {		
					if (err) {		
						console.log('error:', err);		
						return;		
					}		

					console.log('success:', data);		
				});		

			// oss.listObjects({		
			//     Bucket: 'bucket名称',		
			//     MaxKeys: '10',		
			//     Prefix: '',		
			//     Marker: '',		
			//     Delimiter: ''		
			//   },		
			//   function (err, data) {		
			//     if (err) {		
			//       console.log('error:', err);		
			//       return;		
			//     }		

			//     console.log('success:', data);		
			//   });		



			 

			});		
