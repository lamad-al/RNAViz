import json
import sys
import os
from lib import Project

def main(args):
    """
    Parameters
    ----------
    args: Array of arguments
        - arg[0] the user id
        - arg[1] the user choice of motif % kept
    Returns
    -------
    object: json object
        Contain the tree build from RNA sequence
    """

    print
    param = []
    #Load the rna sequences
    try:
        os.chdir(os.path.join("..", "python", "src"))
        print os.getcwd()
        path = os.path.join(os.getcwd(),"results_" + args[0] + ".json")
        json_data = open(path).read()
        param.append(json.loads(json_data))

    except:
        print "ERROR RECOVERING DATA"
        sys.exit(1)
    #user id
    param.append(args[0])
    #Motif %
    param.append(args[1])

    project = Project(param[0], param[1])
    project.runSNM()
    project.buildTree(score="variance", percentage=param[2])
    # Send it to stdout (to PHP)

    print json.dumps(project.tree.tree_format('json'))


if __name__ == '__main__':
    main(sys.argv[1:])