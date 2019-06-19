db.drones.insertOne()

const Mavic2 = {
    name: "Mavic 2",
    price: 1499,
    description: "The Mavic 2 offers iconic Hasselblad image quality on the Pro and a high-performance zoom lens on the Zoom.",
    icon1: "/images/mavic2icon1.png",
    spec1: "Hasselblad Camera",
    icon2: "/images/mavic2icon2.png",
    spec2: `1" CMOS Sensor`,
    icon3: "/images/mavic2icon3.png",
    spec3: "Adjustable Aperture",
    icon4: "/images/mavic2icon4.png",
    spec4: "10-bit Dlog-M",
    icon5: "/images/mavic2icon5.png",
    spec5: "10-bit HDR Video",
    icon6: "/images/mavic2icon6.png",
    spec6: "Hyperlapse",
    version: ["Pro", "Zoom"],
    imageURL: ["https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic2.png?alt=media&token=a4ec222c-5705-4020-8ceb-a6743ea2cc8b",
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic2-zoom.png?alt=media&token=e14db9dc-2014-4cff-8980-e75525333ca1",
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic2i.jpg?alt=media&token=d42e62a6-0079-4451-b365-4022d02d5298",
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic2ii.jpg?alt=media&token=b12d11c4-af7d-427a-92a6-81cf91c3f5c4",
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic2iii.jpg?alt=media&token=45e61e1c-9d81-475b-93c3-f216198d4452"],
}

const MavicAir = {
    name: "Mavic Air",
    price: 849,
    description: "The ultraportable Mavic Air features high-end flight performance and functionality for limitless exploration.",
    icon1: "/images/mavicairicon1.png",
    spec1: "32 MP Sphere Panoramas",
    icon2: "/images/mavicairicon2.png",
    spec2: "Foldable & Portable",
    icon3: "/images/mavicairicon3.png",
    spec3: "3-Axis Gimbal & 4K Camera",
    icon4: "/images/mavicairicon4.png",
    spec4: "3-Directional Environment Sensing",
    icon5: "/images/mavicairicon5.png",
    spec5: "SmartCapture",
    icon6: "/images/mavicairicon6.png",
    spec6: "21-Minute Flight Time",
    colors: ["Onyx Black", "Arctic White"],
    imageURL: ["https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-air-black-fold.png?alt=media&token=6cc468de-c4b1-40e9-9d67-c63bd7b24cc0", 
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-air-black-fold.png?alt=media&token=6cc468de-c4b1-40e9-9d67-c63bd7b24cc0",
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-air-white-fold.png?alt=media&token=aa1063ba-02dd-456a-bca1-d2078501a587",
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-air-white-unfold.png?alt=media&token=e1048ec1-8959-4846-b82d-62d80f1b9956",
"https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavicair.jpg?alt=media&token=9d3d4b62-c7f6-4e26-a454-dcc8a53645f8"],
}

const MavicProPlatinum = {
    name: "Mavic Pro Platinum",
    price: 999,
    description: "With enhanced endurance and quieter flight, the Mavic Pro Platinum is DJI's best portable drone yet.",
    icon1: "/images/mavicproicon1.png",
    spec1: "Flight time: 30 MINS",
    icon2: "/images/mavicproicon2.png",
    spec2: "Control range: 7 KM",
    icon3: "/images/mavicproicon3.png",
    spec3: "Noise reduction: 4 dB",
    icon4: "/images/mavicproicon4.png",
    spec4: "Gimbal: 3-axis",
    icon5: "/images/mavicproicon5.png",
    spec5: "Video resolution: 4K",
    icon6: "/images/mavicproicon6.png",
    spec6: "Camera resolution: 12 MP",
    imageURL: ["https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-pro-platinum.png?alt=media&token=8e983e0b-e664-4d4b-97ce-0dc9908cf952", 
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-pro-platinum-small.png?alt=media&token=79437ccd-09bb-4995-b94c-3de66b839477",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-pro-i.jpg?alt=media&token=2c451b11-a515-489e-8db5-d8591d7beb08", 
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-pro-ii.jpg?alt=media&token=4d38ceec-6940-4c6c-84ed-a6dc7272e771", 
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fmavic-pro-iii.jpg?alt=media&token=d8064924-4499-481e-ac38-70d38e909aa0"],
}

const Phantom3SE = {
    name: "Phantom 3 SE",
    price: 699,
    description: "The Phantom 3 SE is the most streamlined addition to the Phantom 3 series yet. It connects to the DJI GO app via Wi-Fi with maximum a video transmission range of up to 2.5 mi (4 km), and it has a 4K video camera. ",
    icon1: "/images/phantom3icon1.png",
    spec1: "Flight time: 25 MINS",
    icon2: "/images/phantom3icon2.png",
    spec2: "Control range: 6 KM",
    icon3: "/images/phantom3icon3.png",
    spec3: "Speed: 68 KM/H",
    icon4: "/images/phantom3icon4.png",
    spec4: "Video resolution: 4K",
    icon5: "/images/phantom3icon5.png",
    spec5: "Sensor range: 25 M",
    icon6: "/images/phantom3icon6.png",
    spec6: "Camera resolution: 12 MP",
    imageURL: ["https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se.png?alt=media&token=07f00be4-b994-4e35-91f6-90335b2b74b6",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se-i.jpg?alt=media&token=2a96056b-d53b-4837-b0d0-c2c8da021f39",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se-ii.jpg?alt=media&token=9d80bf06-1938-4813-9314-d0c7362e72da",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se-iii.jpg?alt=media&token=3c6324cc-0d2a-4231-8ffc-00a86ea6a948",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se-iv.jpg?alt=media&token=457a2283-7917-4365-bbce-658adc2a7ea9"],
}

const Phantom4Ad = {
    name: "Phantom 4 Advanced",
    price: 1399,
    description: "1-inch 20MP sensor, 30-min flight time, forward obstacle avoidance, smart features and more. Advanced Aerial Imaging Technology.",
    icon1: "/images/phantom4icon1.png",
    spec1: "Flight time: 30 MINS",
    icon2: "/images/phantom4icon2.png",
    spec2: "Control range: 7 KM",
    icon3: "/images/phantom4icon3.png",
    spec3: "Speed: 72 KM/H",
    icon4: "/images/phantom4icon4.png",
    spec4: "Video resolution: 4K 60fps",
    icon5: "/images/phantom4icon5.png",
    spec5: "Sensor range: 30 M",
    icon6: "/images/phantom4icon6.png",
    spec6: "Camera resolution: 20 MP",
    imageURL: ["https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-4-advanced.png?alt=media&token=63ddc074-c6f5-4fda-8cf9-5e4983b8ddf5",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-4-advanced-i.jpg?alt=media&token=8f4e093e-5eca-4052-9635-6b1512538b08",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-4-advanced-ii.jpg?alt=media&token=c0cc99de-6799-4ccc-8483-037c82b3199c",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-4-advanced-iii.jpg?alt=media&token=b039fbec-0e10-48b4-bc9f-5ca26586d100",
    "https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-4-advanced-iv.jpg?alt=media&token=aaaa9b67-f394-4d1e-bc6c-76276c7560e3"],
}










