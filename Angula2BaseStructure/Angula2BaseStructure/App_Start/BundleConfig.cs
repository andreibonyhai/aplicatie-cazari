using System.Web.Optimization;

namespace Angula2BaseStructure
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                        "~/Scripts/Vendor/jquery-2.1.1.js",
                        "~/Scripts/Vendor/bootstrap.min.js",
                        "~/Scripts/Vendor/plugins/metisMenu/jquery.metisMenu.js",
                        "~/Scripts/Vendor/plugins/slimscroll/jquery.slimscroll.min.js",
                        "~/Scripts/Vendor/inspinia.js",
                        "~/Scripts/Vendor/plugins/pace/pace.min.js",
                        "~/Scripts/Vendor/plugins/steps/jquery.steps.js",
                        "~/Scripts/Vendor/plugins/footable/footable.min.js"

                        ));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Vendor/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Vendor/css/bootstrap.css",
                      "~/Content/Vendor/css/font-awesome.css",
                      "~/Content/Vendor/css/animate.css",
                      "~/Content/Vendor/css/style.css",
                      "~/Content/Vendor/css/plugins/steps/jquery.steps.css",
                      "~/Content/Vendor/css/plugins/footable/footable.bootstrap.css",
                      "~/Content/App/loaders.css",
                      "~/Content/App/site.css"));
        }
    }
}
