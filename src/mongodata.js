db.drones.insertOne({})

const Mavic2 = {
name: "Mavic 2",
takeoffWeight: [{"Mavic 2 Pro": `907 g`}, {"Mavic 2 Zoom": `905g`}],
dimensions: [{Folded: `214×91×84 mm (length×width×height)`}, {Unfolded: `322×242×84 mm (length×width×height)`}],
diagonalDistance: `354 mm`,
maxAscentSpeed: [`5 m/s (S-mode)`, `4 m/s (P-mode)`],
maxDescentSpeed: [`3 m/s (S-mode)`, `3 m/s (P-mode)`],
maxSpeedNearSeaLevel: `72 kph (S-mode)`,
maxServiceCeilingAboveSeaLevel: `6000 m`,
maxFlightTimeNoWind: `31 minutes (at a consistent 25 kph)`,
maxHoveringTimeNoWind: `29 minutes`,
maxFlightDistanceNoWind: `18 km (at a consistent 50 kph)`,
maxWindSpeedResistance: `29–38 kph`,
maxTiltAngle: `35° (S-mode, with remote controller) 25° (P-mode)`,
maxAngularVelocity: `200°/s`,
operatingTemperatureRange: `-10°C to 40°C`,
operatingFrequency: [`2.400 - 2.483 GHz`, `5.725 - 5.850 GHz`],
transmissionPower: [`2.400 - 2.483 GHz`, `FCC：≤26 dBm`, `CE：≤20 dBm`, `SRRC：≤20 dBm`, `MIC：≤20 dBm`, `5.725-5.850 GHz`, `FCC：≤26 dBm`, `CE：≤14 dBm`, `SRRC：≤26 dBm`],
GNSS: `GPS+GLONASS`,
hoveringAccuracyRange: [{Vertical: [`± 0.1 m (when vision positioning is active)`, `± 0.5 m (with GPS positioning)`]}, {Horizontal: [`± 0.3 m (when vision positioning is active)`, `± 1.5 m (with GPS positioning)`]}],
internalStorage: `8 GB`,
mechanicalRange: [{Tilt: `-135–45°`}, {Pan: `-100–100°`}],
controllableRangeTilt: [{Tilt: `-90–30°`}, {Pan: `-75–75°`}],
stabilization: `3-axis (tilt, roll, pan)`,
maxControlSpeedTilt: `120° /s`,
angularVibrationRange: [`±0.01° (Mavic 2 Pro)`, `±0.005° (Mavic 2 Zoom)`],
sensor: [`1” CMOS`, `Effective Pixels: 20 million`],
lens: [{FOV: `about 77°`}, {"35 mm Format Equivalent": `28 mm`}, {Aperture: ` f/2.8–f/11`}, {"Shooting Range": `1 m to ∞`}],
ISORange: [{Video: `100-6400`}, {Photo: [`100-3200 (auto)`, `100-12800 (manual)`]}],
shutterSpeed: {"Electronic Shutter": `8–1/8000s`},
stillImageSize: `5472×3648`,
stillPhotographyModes: ["Single shot", {"Burst shooting": `3/5 frames`}, {"Auto Exposure Bracketing (AEB)": `3/5 bracketed frames at 0.7 EV Bias`}, {Interval: `(JPEG: 2/3/5/7/10/15/20/30/60s RAW:5/7/10/15/20/30/60s)`}],
videoResolution: [{"4K": `3840×2160 24/25/30p`}, {"2.7K": `2688x1512 24/25/30/48/50/60p`}, {FHD: `1920×1080 24/25/30/48/50/60/120p`}],
maxVideoBitrate: `100Mbps`,
colorMode: `Dlog-M (10bit), support HDR video (HLG 10bit)`,
supportedFileSystem: [`FAT32 (≤ 32 GB)`, `exFAT (> 32 GB)`],
photoFormat: `JPEG / DNG (RAW)`,
videoFormat: `MP4 / MOV (MPEG-4 AVC/H.264, HEVC/H.265)`,
maxTransmissionDistance: [`FCC: 8000 m`, `CE: 5000 m`, `SRRC: 5000 m`, `MIC: 5000 m`],
operatingTemperatureRangeRemote: `0℃ - 40℃`,
battery: `3950 mAh`,
operatingCurrentVoltage: `1800 mA ⎓ 3.83 V`,
supportedMobileDeviceSize: [{"Max length": `160 mm`}, {"max thickness": `6.5–8.5 mm`}],
supportedUSBPortTypes: [`Lightning`, `Micro USB (Type-B)`, `USB-C`],
capacity: `3850 mAh`,
voltage: `15.4 V`,
maxChargingVoltage: `17.6 V`,
batteryType: `LiPo 4S`,
energy: `59.29 Wh`,
netWeight: `297 g`,
chargingTemperatureRange: `5℃ to 40℃`,
maxChargingPower: `80 W`,
sensingSystem: `Omnidirectional Obstacle Sensing`,
forward: [{"Precision Measurement Range": `0.5 - 20 m`}, {"Detectable Range": `20 - 40 m`}, {"Effective Sensing Speed": `≤ 14m/s`}, {FOV: [`Horizontal: 40°`, `Vertical: 70°`]}],
backward: [{"Precision Measurement Range": `0.5 - 16 m`}, {"Detectable Range": `16 - 32 m`}, {"Effective Sensing Speed": `≤ 12m/s`}, {FOV: [`Horizontal: 60°`, `Vertical: 77°`]}],
upward: {"Precision Measurement Range": `0.1 - 8 m`},
downward: [{"Precision Measurement Range": `0.5 - 11 m`}, {"Detectable Range": `11 - 22 m`}],
sides: [{"Precision Measurement Range": `0.5 - 10 m`}, {"Effective Sensing Speed": `≤ 8m/s`}, {FOV: [`Horizontal: 80°`, `Vertical: 65°`]}],
operatingEnvironment: [{"Forward, Backward and Sides": `Surface with clear pattern and adequate lighting (lux > 15)`}, {Upward: `Detects diffuse reflective surfaces (>20%) (walls, trees, people, etc.)`}, {Downward: [`Surface with clear pattern and adequate lighting (lux > 15)`, `Detects diffuse reflective surfaces (>20%) (walls, trees, people, etc.)`]}],
input: `100-240 V, 50/60 Hz, 1.8A`,
output: [`Main: 17.6 V ⎓ 3.41 A`, `or 17.0 V ⎓ 3.53 A USB: 5 V⎓2 A`],
voltageCharger: `17.6 ± 0.1 V`,
ratedPower: `60 W`,
supportedSDCards: [`Micro SD™`, `Supporting Micro SD with capacity up to 128 GB and R/W speed up to UHS-I Speed Grade 3`],
recommendedMicroSDCards: [{"32G": [`Sandisk V30`, `Sandisk Extreme V30 Pro`]}, {"64G": `Sandisk Extreme Pro V30`}, {"128G": [`Sandisk Extreme V30`, `Sandisk Extreme Pro V30`, `Kingston Canvas Go!`, `Kingston Canvas React`]}],
videoTransmissionSystem: `OcuSync 2.0`,
appName: `DJI GO 4`,
liveViewQuality: [{"Remote Controller": `720p@30fps / 1080p@30fps`}, {"DJI Goggles": `720p@30fps / 1080p@30fps`}, {"DJI Goggles RE": `720p@30fps / 1080p@30fps`}],
latency: `120 - 130 ms`,
maxLiveViewBitrate: `40Mbps`
}

const MavicAir = {
    name: "Mavic Air",
    takeoffWeight: `430 g`,
    dimensions: [{Folded: `168×83×49 mm (length×width×height)`}, {Unfolded: `168×184×64 mm (length×width×height)`}],
    diagonalDistance: `213 mm`,
    maxAscentSpeed: [`4 m/s (S-mode)`, `2 m/s (P-mode)`, `2 m/s (Wi-Fi mode)`],
    maxDescentSpeed: [`3 m/s (S-mode)`, `1.5 m/s (P-mode)`, `1 m/s (Wi-Fi mode)`],
    maxSpeedNearSeaLevel: [`68.4 kph (S-mode)`, `28.8 kph (P-mode)`, `28.8 kph (Wi-Fi mode)`],
    maxServiceCeilingAboveSeaLevel: `5000 m`,
    maxFlightTimeNoWind: `21 minutes (at a consistent 25 kph)`,
    maxHoveringTimeNoWind: `20 minutes`,
    maxFlightDistanceNoWind: `10 km`,
    maxWindSpeedResistance: `29–38 kph`,
    maxTiltAngle: `35° (S-mode) 15° (P-mode)`,
    maxAngularVelocity: `250°/s`,
    operatingTemperatureRange: `0°C to 40°C`,
    operatingFrequency: [`2.400 - 2.4835 GHz`, `5.725 - 5.850 GHz`],
    transmissionPower: [`2.400 - 2.4835 GHz`, `FCC：≤28 dBm`, `CE：≤19 dBm`, `SRRC：≤19 dBm`, `MIC：≤19 dBm`, `5.725-5.850 GHz`, `FCC：≤31 dBm`, `CE：≤14 dBm`, `SRRC：≤27 dBm`],
    GNSS: `GPS+GLONASS`,
    hoveringAccuracyRange: [{Vertical: [`± 0.1 m (when vision positioning is active)`, `± 0.5 m (with GPS positioning)`]}, {Horizontal: [`± 0.1 m (when vision positioning is active)`, `± 1.5 m (with GPS positioning)`]}],
    internalStorage: `8 GB`,
    mechanicalRange: [{Tilt: `-100–22°`}, {Roll: `-30–30°`}, {Pan: `-12–12°`}],
    controllableRangeTilt: [{Tilt: `-90–0° (default setting)`}, `-90° to +17° (extended)`],
    stabilization: `3-axis (tilt, roll, pan)`,
    maxControlSpeedTilt: `120° /s`,
    angularVibrationRange:  `±0.005°`,
    sensor: [`1/2.3” CMOS`, `Effective Pixels: 12 MP`],
    lens: [{FOV: `85°`}, {"35 mm Format Equivalent": `24 mm`}, {Aperture: ` f/2.8`}, {"Shooting Range": `0.5 m to ∞`}],
    ISORange: [{Video: [`100-3200 (auto)`, `100-3200 (manual)`]}, {Photo: [`100-1600 (auto)`, `100-3200 (manual)`]}],
    shutterSpeed: {"Electronic Shutter": `8–1/8000s`},
    stillImageSize: [`4:3: 4056×3040`, `16:9: 4056×2280`],
    stillPhotographyModes: ["Single shot", "HDR", {"Burst shooting": `3/5/7 frames`}, {"Auto Exposure Bracketing (AEB)": `3/5 bracketed frames at 0.7 EV Bias`}, {Interval: `2/3/5/7/10/15/20/30/60 s`}, {Pano: [`×1: 42°×78°, 2048×3712 (W×H)`, `3×3: 119°×78°, 4096×2688 (W×H)`, `180°: 251°×88°, 6144×2048 (W×H) `, `Sphere (3×8+1): 8192×4096 (W×H)`]}],
    videoResolution: [{"4K Ultra HD": `3840×2160 24/25/30p`}, {"2.7K": `2720x1530 24/25/30/48/50/60p`}, {FHD: `1920×1080 24/25/30/48/50/60/120p`}, {HD: `1280×720 24/25/30/48/50/60/120p`}],
    maxVideoBitrate: `100Mbps`,
    colorMode: `Dlog-M (10bit), support HDR video (HLG 10bit)`,
    supportedFileSystem: `FAT32`,
    photoFormat: `JPEG / DNG (RAW)`,
    videoFormat: `MP4/MOV (H.264/MPEG-4 AVC`,

    
    maxTransmissionDistance: [`FCC: 8000 m`, `CE: 5000 m`, `SRRC: 5000 m`, `MIC: 5000 m`],
    operatingTemperatureRangeRemote: `0℃ - 40℃`,
    battery: `3950 mAh`,
    operatingCurrentVoltage: `1800 mA ⎓ 3.83 V`,
    supportedMobileDeviceSize: [{"Max length": `160 mm`}, {"max thickness": `6.5–8.5 mm`}],
    supportedUSBPortTypes: [`Lightning`, `Micro USB (Type-B)`, `USB-C`],
    capacity: `3850 mAh`,
    voltage: `15.4 V`,
    maxChargingVoltage: `17.6 V`,
    batteryType: `LiPo 4S`,
    energy: `59.29 Wh`,
    netWeight: `297 g`,
    chargingTemperatureRange: `5℃ to 40℃`,
    maxChargingPower: `80 W`,
    sensingSystem: `Omnidirectional Obstacle Sensing`,
    forward: [{"Precision Measurement Range": `0.5 - 20 m`}, {"Detectable Range": `20 - 40 m`}, {"Effective Sensing Speed": `≤ 14m/s`}, {FOV: [`Horizontal: 40°`, `Vertical: 70°`]}],
    backward: [{"Precision Measurement Range": `0.5 - 16 m`}, {"Detectable Range": `16 - 32 m`}, {"Effective Sensing Speed": `≤ 12m/s`}, {FOV: [`Horizontal: 60°`, `Vertical: 77°`]}],
    upward: {"Precision Measurement Range": `0.1 - 8 m`},
    downward: [{"Precision Measurement Range": `0.5 - 11 m`}, {"Detectable Range": `11 - 22 m`}],
    sides: [{"Precision Measurement Range": `0.5 - 10 m`}, {"Effective Sensing Speed": `≤ 8m/s`}, {FOV: [`Horizontal: 80°`, `Vertical: 65°`]}],
    operatingEnvironment: [{"Forward, Backward and Sides": `Surface with clear pattern and adequate lighting (lux > 15)`}, {Upward: `Detects diffuse reflective surfaces (>20%) (walls, trees, people, etc.)`}, {Downward: [`Surface with clear pattern and adequate lighting (lux > 15)`, `Detects diffuse reflective surfaces (>20%) (walls, trees, people, etc.)`]}],
    input: `100-240 V, 50/60 Hz, 1.8A`,
    output: [`Main: 17.6 V ⎓ 3.41 A`, `or 17.0 V ⎓ 3.53 A USB: 5 V⎓2 A`],
    voltageCharger: `17.6 ± 0.1 V`,
    ratedPower: `60 W`,
    supportedSDCards: [`Micro SD™`, `Supporting Micro SD with capacity up to 128 GB and R/W speed up to UHS-I Speed Grade 3`],
    recommendedMicroSDCards: [{"32G": [`Sandisk V30`, `Sandisk Extreme V30 Pro`]}, {"64G": `Sandisk Extreme Pro V30`}, {"128G": [`Sandisk Extreme V30`, `Sandisk Extreme Pro V30`, `Kingston Canvas Go!`, `Kingston Canvas React`]}],
    videoTransmissionSystem: `OcuSync 2.0`,
    appName: `DJI GO 4`,
    liveViewQuality: [{"Remote Controller": `720p@30fps / 1080p@30fps`}, {"DJI Goggles": `720p@30fps / 1080p@30fps`}, {"DJI Goggles RE": `720p@30fps / 1080p@30fps`}],
    latency: `120 - 130 ms`,
    maxLiveViewBitrate: `40Mbps`
    }



