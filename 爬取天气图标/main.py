import requests
import re

url = 'http://www.weather.com.cn/static/html/legend.shtml'

# td正则
wrapReg = r'<td width="12%"[^>]*>.*?</td>'
# 图片url正则
imgReg = r'<img src="(.*?)"'
# 天气名称正则
nameReg = r'<a[^>]*>([^>]*?)</a>'
# 后缀正则
suffixReg = r'\.([^.]*?)$'
# 颜色正则
colorReg = r'bgcolor="(.*?)"'

def getPage():
  # 请求头
  headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.5383.400 QQBrowser/10.0.1313.400"}
  res = requests.get(url, headers)
  # 手动指定字符编码为utf-8
  res.encoding = 'utf-8'
  # print(res.text)
  return res.text

def saveFile(url, name, bgcolor):
  # 获取后缀
  suffix = re.findall(suffixReg, url)
  # 下载文件
  res = requests.get(url)
  # 根据bgcolor区分白天和黑夜文件路径
  filePath = 'day/' if bgcolor == '#FEE6C5' else 'night/'
  print('filePath --> ', filePath)
  # 文件名
  fileName = filePath + name + '.' + suffix[0]
  with open(fileName, 'wb') as f:
    # 保存文件
    f.write(res.content)
    f.close

def run():
  # 爬取网页
  text = getPage()
  # 拿到td标签里的内容
  lis = re.findall(wrapReg, text, re.S|re.M)
  for item in lis:
    bgcolor = re.findall(colorReg, item, re.S|re.M)
    imgUrl = re.findall(imgReg, item, re.S|re.M)
    nameStr = re.findall(nameReg, item, re.S|re.M)
    if imgUrl and len(imgUrl) > 0 and nameStr and len(nameStr) > 0 and bgcolor and len(bgcolor) > 0:
      print('------------')
      print(imgUrl[0], nameStr[0], bgcolor[0])
      saveFile(imgUrl[0], nameStr[0], bgcolor[0])

if __name__ == "__main__":
  run()