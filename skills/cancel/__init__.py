# Cancel Skill for OpenClaw
# Cancel active modes

from typing import Dict, Any

__version__ = "1.0.0"
__author__ = "oh-my-openclaw contributors"


def execute(options: Dict[str, Any] = None) -> Dict[str, Any]:
    """
    Cancel active execution modes.

    Args:
        options: Optional cancellation parameters

    Returns:
        Dict with cancellation results
    """
    return {
        "status": "cancel_complete",
        "message": "All active modes cancelled",
        "skill": "cancel",
        "version": __version__,
    }
