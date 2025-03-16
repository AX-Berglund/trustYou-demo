#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ScreenTimeModule, NSObject)

RCT_EXTERN_METHOD(requestAuthorization: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getScreenTimeSummary: (RCTResponseSenderBlock)callback)

@end
