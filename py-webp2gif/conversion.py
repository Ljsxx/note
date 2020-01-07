from PIL import Image
import os
import re

rootPath = './img/'
webpReg = r'webp$'

def getAllFile (filePath):
  files = os.listdir(filePath)
  return files

def handleConversion (fileName):
  fileName = rootPath + fileName
  print('fileName--->', fileName)
  saveName = fileName.replace('webp', 'gif')
  print('saveName--->', saveName)
  im = Image.open(fileName)
  im.save(saveName, 'gif', save_all=True)

def main():
  files = getAllFile('./img')
  for fileName in files:
    gifName = fileName.replace('.webp', '.gif')
    # webp格式且未转过的才需要转
    if re.findall(webpReg, fileName) != [] and (gifName not in files):
      handleConversion(fileName)

if __name__ == '__main__':
  main()