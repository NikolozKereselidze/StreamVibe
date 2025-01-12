import phone from "../../assets/devices/phone.svg";
import tablet from "../../assets/devices/tablet.svg";
import laptop from "../../assets/devices/laptop.svg";
import tv from "../../assets/devices/tv.svg";
import console from "../../assets/devices/console.svg";
import vr from "../../assets/devices/vr.svg";
import DeviceCard from "../Cards/DeviceCard";

const deviceInfo = [
  {
    imgSrc: phone,
    cardInfo:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    deviceType: "Phone",
  },
  {
    imgSrc: tablet,
    cardInfo:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    deviceType: "Tablet",
  },
  {
    imgSrc: laptop,
    cardInfo:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    deviceType: "Laptop",
  },
  {
    imgSrc: tv,
    cardInfo:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    deviceType: "Tv",
  },
  {
    imgSrc: console,
    cardInfo:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    deviceType: "Console",
  },
  {
    imgSrc: vr,
    cardInfo:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    deviceType: "Vr",
  },
];

const DeviceCardRender = () => {
  return (
    <>
      {deviceInfo.map((device, index) => (
        <DeviceCard
          key={index}
          imgSrc={device.imgSrc}
          cardInfo={device.cardInfo}
          deviceType={device.deviceType}
        />
      ))}
    </>
  );
};

export default DeviceCardRender;
