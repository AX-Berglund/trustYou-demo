#import <UIKit/UIKit.h>
#import <React/RCTBridgeDelegate.h>
#import <Expo/Expo.h>

@interface AppDelegate : EXAppDelegateWrapper <RCTBridgeDelegate>
@end

@implementation AppDelegate

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
  #ifdef DEBUG
    return [[NSURL alloc] initWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
  #else
    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  #endif
}

@end
