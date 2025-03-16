import Foundation
import FamilyControls
import DeviceActivity

@objc(ScreenTimeModule)
class ScreenTimeModule: NSObject {
    
    private let store = ManagedSettingsStore()
    
    @objc func requestAuthorization(_ callback: @escaping (Bool) -> Void) {
        Task {
            do {
                try await AuthorizationCenter.shared.requestAuthorization(for: .individual)
                callback(true)
            } catch {
                callback(false)
            }
        }
    }
    
    @objc func getScreenTimeSummary(_ callback: @escaping (NSDictionary) -> Void) {
        Task {
            do {
                let selection = FamilyActivitySelection.allActivities
                let data = try await AuthorizationCenter.shared.activities(for: selection)
                
                var screenTimeData: [String: Any] = [:]
                for activity in data {
                    screenTimeData[activity.key.description] = activity.value.totalDuration?.formatted()
                }
                
                callback(screenTimeData as NSDictionary)
            } catch {
                callback(["error": "Failed to fetch screen time data"])
            }
        }
    }
    
    @objc static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
